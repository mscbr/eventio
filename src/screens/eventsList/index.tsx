import React, { useMemo, useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { AppState } from 'store';
import theme from 'themming';
import ScreenLayout from 'components/screenLayout';
import Avatar from 'components/avatar';
import UserLabel from 'components/dropdown/parts/userLabel';
import UserItems from 'components/dropdown/parts/userItems';
import Dropdown from 'components/dropdown/index';
import ViewSwitch from 'components/viewSwitch';
import EventsFilter from 'components/eventsFilter';
import RoundButton from 'components/button/roundButton';
import Event from 'components/event';
import Centered from 'components/centered';
import Spinner from 'components/spinner';
import useWindowWidth from 'shared/hooks/useWindowWidth';
import { ViewType, IEvent, EFilterTypes } from 'types/event';
import { FETCH_EVENTS } from 'store/events/actions';

const StyledEventsContainer = styled.div<{ view?: ViewType }>`
  padding: 16px;
  @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
    padding: 40px 80px 40px 80px;
  }
`;
const StyledEventsList = styled.div<{ view?: ViewType }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
    display: ${({ view }) => (view === 'grid' ? 'grid' : 'flex')};
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(auto-fill, auto);
    grid-gap: ${({ view }) => (view === 'grid' ? '16px' : 'inherit')};
  }
`;
const StyledTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const EventsList = () => {
  const upMobile = useWindowWidth() > theme.breakpoints.mobile;
  const dispatch = useDispatch();
  const history = useHistory();

  const { events: eventsData, isFetching } = useSelector(
    (state: AppState) => state.eventsReducer
  );
  const { user, loading } = useSelector((state: AppState) => state.userReducer);

  const [view, setView] = useState<ViewType>('grid');
  const [events, setEvents] = useState<IEvent[] | undefined>(eventsData);

  const header = useMemo(
    () => [
      loading ? (
        <Spinner key="spinner-layout-header" />
      ) : (
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
        />
      ),
    ],
    [upMobile, loading]
  );

  const filterData = useCallback(
    (data: IEvent[]) => {
      return (filter: EFilterTypes) => {
        switch (filter) {
          case EFilterTypes.future:
            return setEvents(
              data.filter(event => new Date(event.startsAt) > new Date())
            );
          case EFilterTypes.past:
            setEvents(
              data.filter(event => new Date(event.startsAt) < new Date())
            );
            return;
          default:
            setEvents(eventsData);
        }
      };
    },
    [eventsData]
  );

  useEffect(() => {
    dispatch(FETCH_EVENTS());
  }, [dispatch]);
  useEffect(() => {
    setEvents(eventsData);
  }, [eventsData]);

  return (
    <ScreenLayout
      header={header}
      bottomButton={
        <RoundButton onClick={() => history.push('/event/create')} />
      }
    >
      <StyledEventsContainer>
        <StyledTop>
          <EventsFilter onChange={filterData(eventsData)} />
          <ViewSwitch viewType={view} onChange={setView} />
        </StyledTop>
        {isFetching ? (
          <Centered>
            <Spinner key="spinner-layout-content" />
          </Centered>
        ) : (
          <StyledEventsList view={view}>
            {events?.map(event => (
              <Event key={event.id} event={event} viewType={view} />
            ))}
          </StyledEventsList>
        )}
      </StyledEventsContainer>
    </ScreenLayout>
  );
};

export default EventsList;
