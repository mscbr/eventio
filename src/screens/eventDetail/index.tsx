import React, { useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import theme from 'themming';
import ScreenLayout from 'components/screenLayout';
import Event from 'components/event';
import Surface from 'components/surface';
import Title from 'components/typography/title';
import Tag from 'components/tag';
import Dropdown from 'components/dropdown/index';
import Spinner from 'components/spinner';
import Centered from 'components/centered';
import UserLabel from 'components/dropdown/parts/userLabel';
import Avatar from 'components/avatar';
import UserItems from 'components/dropdown/parts/userItems';
import useWindowWidth from 'shared/hooks/useWindowWidth';
import RoundButton from 'components/button/roundButton';
import { IEvent } from 'types/event';
import { getEvent } from 'api/handlers/getEvent';
import { useAsyncReducer } from 'store/useAsyncReducer';
import { AppState } from 'store';

const StyledDetail = styled.div`
  font-size: ${theme.typography.fontSize[12]};
  font-weight: ${theme.typography.fontWeight.semiBold};
  color: ${theme.palette.editButton.label};
  letter-spacing: ${theme.typography.letterSpacing[1]};
  line-height: 1.5rem;
  margin: 24px 8px 24px 16px;
`;
const MainWrapper = styled.div`
  width: 100%;
  @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 'auto';
    grid-gap: 16px;
  }
`;

const EventDetail = () => {
  const history = useHistory();
  const { user } = useSelector(({ userReducer }: AppState) => userReducer);
  const { id } = useParams();
  const upMobile = useWindowWidth() > theme.breakpoints.mobile;

  const {
    loading,
    data,
    refetch,
  }: {
    loading: boolean;
    data: IEvent;
    refetch: () => void;
  } = useAsyncReducer('eventDetail', () => getEvent(id as string));

  const eventRef = useRef<IEvent>();
  if (data) eventRef.current = data;

  const surfaceSize = () => {
    return {
      height: 'auto',
      padding: '10px 32px 32px 32px',
    };
  };

  const event = eventRef.current;

  const header = useMemo(
    () => [
      <Dropdown
        label={
          upMobile ? (
            <UserLabel>{`${user?.firstName} ${user?.lastName}`}</UserLabel>
          ) : (
            undefined
          )
        }
        adornment={
          <Avatar firstName={user?.firstName} lastName={user?.lastName} />
        }
        items={<UserItems />}
        key="usr-dd"
      />,
    ],
    // user is not included in dependencies because user
    // cannot be changed without re-rendering the screen (auth flow)
    [upMobile, user]
  );

  if (!event && !loading) return <span>Event #{id} was not found</span>;

  return (
    <>
      {loading && !event ? (
        <Centered>
          <Spinner key="spinner-layout-header" />
        </Centered>
      ) : (
        <ScreenLayout
          header={header}
          bottomButton={
            <RoundButton onClick={() => history.push('/event/create')} />
          }
        >
          <StyledDetail>
            DETAIL EVENT: {!upMobile && <br />}#{id?.toUpperCase()}
          </StyledDetail>
          <MainWrapper>
            <Event event={event as IEvent} viewType="grid" onClick={refetch} />
            <Surface {...surfaceSize()}>
              <Title>Attendees</Title>
              {event?.attendees.map(attendee =>
                attendee.id !== user.id ? (
                  <Tag key={attendee.id}>
                    {`${attendee.firstName} ${attendee.lastName}`}
                  </Tag>
                ) : (
                  <Tag key={attendee.id} outline>
                    You
                  </Tag>
                )
              )}
            </Surface>
          </MainWrapper>
        </ScreenLayout>
      )}
    </>
  );
};

export default EventDetail;
