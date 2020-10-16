import React, { useState } from 'react';
import styled from 'styled-components';

import { ViewType, IEvent, EFilterTypes } from 'types/event';
import { mockEventsList } from 'shared/mockData/events';
import ViewSwitch from 'components/viewSwitch';
import EventsFilter from 'components/eventsFilter';
import EventComponent from './index';

export default { title: 'Molecules' };

const StyledWrapper = styled.div`
  width: 92%;
  margin: 0 20px;
  & > div {
    margin-top: 20px;
  }
`;
const StyledTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Events = () => {
  const [view, setView] = useState<ViewType>('grid');
  const [events, setEvents] = useState<IEvent[]>(mockEventsList);

  const filterData = (data: IEvent[]) => {
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
          setEvents(mockEventsList);
      }
    };
  };

  return (
    <StyledWrapper>
      <StyledTop>
        <EventsFilter onChange={filterData(mockEventsList)} />
        <ViewSwitch viewType={view} onChange={setView} />
      </StyledTop>
      {events.map(event => (
        <EventComponent key={event.id} event={event} viewType={view} />
      ))}
    </StyledWrapper>
  );
};
