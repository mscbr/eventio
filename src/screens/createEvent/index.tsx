import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { DateTime } from 'luxon';

import theme from 'themming';
import useWindowWidth from 'shared/hooks/useWindowWidth';
import ScreenLayout from 'components/screenLayout';
import Surface from 'components/surface';
import CloseButton from 'components/button/closeButton';
import TextInput from 'components/textInput';
import Button from 'components/button';
import Title from 'components/typography/title';
import Subtitle from 'components/typography/subtitle';
import { Form, Field } from 'react-final-form';
import { isRequired } from 'shared/validators';
import { postEvent } from 'api/handlers/postEvent';

const StyledForm = styled.form`
  .header {
    text-align: center;
    margin-bottom: 40px;
  }
  .inputs {
    width: 100%;
  }
  .input {
    margin-bottom: 44px;
  }
  .buttonWrapper {
    margin-top: -8px;
    display: flex;
    justify-content: center;
  }
`;

interface FormFields {
  title: string;
  description: string;
  date: string;
  time: string;
  capacity: number;
}

const CreateEvent = () => {
  const upMobile = useWindowWidth() > theme.breakpoints.mobile;
  const history = useHistory();

  const [posting, setPosting] = useState(false);
  const [postingError, setPostingError] = useState<string | undefined>(
    undefined
  );

  // little bit not DRY
  const surfaceSize = () => {
    if (upMobile)
      return {
        padding: '41px 32px 39px 32px',
        maxWidth: '480px',
        margin: '10% auto',
      };

    return {
      width: '98%',
      maxWidth: '480px',
      padding: '18px 16px 24px 16px',
      margin: '29px auto',
    };
  };

  const handleSubmit = async ({
    title,
    description,
    date,
    time,
    capacity,
  }: FormFields) => {
    setPosting(true);
    try {
      await postEvent({
        title,
        description,
        startsAt: DateTime.fromISO(`${date}T${time}`).toISO(),
        capacity,
      });
      setPosting(false);
      history.push('/');
    } catch (err) {
      setPosting(false);
      setPostingError(err);
    }
  };

  return (
    <ScreenLayout
      header={[
        <CloseButton onClick={() => history.push('/')} key="close-btn" />,
      ]}
    >
      <Surface {...surfaceSize()}>
        <Form
          onSubmit={handleSubmit}
          render={props => (
            <StyledForm onSubmit={props.handleSubmit}>
              <div className="header">
                <Title>Create new event</Title>
                <Subtitle>Enter details below.</Subtitle>
              </div>
              <div className="inputs">
                <Field name="title" validate={isRequired}>
                  {({ input, meta }) => (
                    <TextInput
                      id="title"
                      label="Title"
                      name={input.name}
                      value={input.value}
                      helperText={meta.touched ? meta.error || ' ' : ' '}
                      error={!!(meta.touched && meta.error)}
                      onChange={input.onChange}
                      onBlur={input.onBlur}
                      className="input"
                    />
                  )}
                </Field>
                <Field name="description" validate={isRequired}>
                  {({ input, meta }) => (
                    <TextInput
                      id="description"
                      label="Description"
                      name={input.name}
                      value={input.value}
                      helperText={meta.touched ? meta.error || ' ' : ' '}
                      error={!!(meta.touched && meta.error)}
                      onChange={input.onChange}
                      onBlur={input.onBlur}
                      className="input"
                    />
                  )}
                </Field>
                <Field name="date" validate={isRequired}>
                  {({ input, meta }) => (
                    <TextInput
                      id="date"
                      label="Date"
                      name={input.name}
                      value={input.value}
                      helperText={meta.touched ? meta.error || ' ' : ' '}
                      error={!!(meta.touched && meta.error)}
                      onChange={input.onChange}
                      onBlur={input.onBlur}
                      type="date"
                      className="input"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  )}
                </Field>
                <Field name="time" validate={isRequired}>
                  {({ input, meta }) => (
                    <TextInput
                      id="time"
                      label="Time"
                      name={input.name}
                      value={input.value}
                      helperText={meta.touched ? meta.error || ' ' : ' '}
                      error={!!(meta.touched && meta.error)}
                      onChange={input.onChange}
                      onBlur={input.onBlur}
                      type="time"
                      className="input"
                    />
                  )}
                </Field>
                <Field name="capacity" validate={isRequired}>
                  {({ input, meta }) => (
                    <TextInput
                      id="capacity"
                      label="Capacity"
                      name={input.name}
                      value={input.value}
                      helperText={meta.touched ? meta.error || ' ' : ' '}
                      error={!!(meta.touched && meta.error)}
                      onChange={input.onChange}
                      onBlur={input.onBlur}
                      type="number"
                      className="input"
                      min="0"
                    />
                  )}
                </Field>
              </div>
              <div className="buttonWrapper">
                {postingError && postingError}
                <Button
                  size="large"
                  label="Create New Event"
                  loading={posting}
                />
              </div>
            </StyledForm>
          )}
        />
      </Surface>
    </ScreenLayout>
  );
};

export default CreateEvent;
