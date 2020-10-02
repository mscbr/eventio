import React, { useState } from 'react';
import styled from 'styled-components';

import { mockEventsList } from 'shared/mockData/events';
import { IEventList, EFilterTypes } from 'types/event';
import EventsFilterComponent from './index';

export default { title: 'Atoms/Filter' };

const StyledWrapper = styled.div`
  margin: 20px;
`;

export const EventsFilter = () => {
  const [events, setEvents] = useState<IEventList[]>(mockEventsList);

  const filterData = (data: IEventList[]) => {
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
      <EventsFilterComponent onChange={filterData(mockEventsList)} />
      {events.map(event => (
        <div key={event.id}>
          <br />
          {event.startsAt}
          <br />
        </div>
      ))}
    </StyledWrapper>
  );
};
