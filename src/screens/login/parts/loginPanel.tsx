import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { AppState } from 'store';
import { LOGIN } from 'store/auth/actions';

import theme from 'themming';
import iconShow from 'assets/icons/icon-show.png';
import TextInput from 'components/textInput';
import Button from 'components/button';
import Title from 'components/typography/title';
import Subtitle from 'components/typography/subtitle';
import { validateAll, isRequired, isEmail } from 'shared/validators';
import SignupLink from './signupLink';

const PanelWrapper = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: auto;
  align-items: center;
  justify-content: center;
  .itemsWrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    width: 100%;
    @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
      max-width: 480px;
      width: 65%;
    }
  }
  .header {
    width: 100%;
    margin-bottom: 45px;
    text-align: center;
    @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
      text-align: left;
    }
  }
  .inputs {
    width: 100%;
    min-width: 240px;
    .email {
      margin-bottom: 48px;
    }
    .password {
      margin-bottom: 40px;
    }
  }
  .btn {
    width: 100%;
    @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
      margin-top: 10px;
    }
  }
`;

const CenteredButton = styled(Button)`
  margin: 0 auto;
  @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
    margin: initial;
  }
`;
const CenteredLink = styled(SignupLink)`
  margin: 0 auto 45px;
  @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
    position: absolute;
    top: 40px;
    right: 40px;
  }
`;

const LoginPanel = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { error, loading } = useSelector(
    (state: AppState) => state.userReducer
  );
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    dispatch(LOGIN(email, password));
    history.push('/events/');
  };

  return (
    <PanelWrapper>
      <Form
        onSubmit={handleSubmit}
        render={props => (
          <form onSubmit={props.handleSubmit} className="itemsWrapper">
            <div className="header">
              <Title>Sign in to Eventio.</Title>
              {!error && <Subtitle>Enter your details below.</Subtitle>}
              {error && <Subtitle>ERRROR MESSAGE</Subtitle>}
            </div>
            <div className="inputs">
              <Field name="email" validate={validateAll([isRequired, isEmail])}>
                {({ input, meta }) => (
                  <TextInput
                    id="email"
                    label="Email"
                    name={input.name}
                    value={input.value}
                    helperText={meta.touched ? meta.error || ' ' : ' '}
                    error={!!(meta.touched && meta.error)}
                    onChange={input.onChange}
                    onBlur={input.onBlur}
                    className="email"
                  />
                )}
              </Field>
              <Field name="password" validate={isRequired}>
                {({ input, meta }) => (
                  <TextInput
                    id="password"
                    label="Password"
                    name={input.name}
                    value={input.value}
                    helperText={meta.touched ? meta.error || ' ' : ' '}
                    error={!!(meta.touched && meta.error)}
                    onChange={input.onChange}
                    onBlur={input.onBlur}
                    type={showPassword ? 'text' : 'password'}
                    icon={
                      <div onClick={() => setShowPassword(state => !state)}>
                        <img src={iconShow} alt="Show password icon" />
                      </div>
                    }
                    className="password"
                  />
                )}
              </Field>
            </div>
            <CenteredLink />
            <div className="btn">
              <CenteredButton size="large" label="sign in" loading={loading} />
            </div>
          </form>
        )}
      />
    </PanelWrapper>
  );
};

export default LoginPanel;
