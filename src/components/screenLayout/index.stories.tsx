import React, { useMemo } from 'react';
import styled from 'styled-components';

import Avatar from 'components/avatar';
import RoundButton from 'components/button/roundButton';
import UserItems from 'components/dropdown/parts/userItems';
import Dropdown from 'components/dropdown/index';
import { mockEventsList } from 'shared/mockData/events';
import Event from 'components/event';
import ScreenLayoutComponent from './index';

export default { title: 'Layout' };

const StyledWrapper = styled.div`
  width: 92%;
  margin: 20px 0 0 0;
`;

export const ScreenLayout = () => {
  const header = useMemo(
    () => [
      <h3 key="h3">__ Go back to login screen</h3>,
      <Dropdown
        adornment={<Avatar firstName="Maciej" lastName="Scbr" />}
        items={<UserItems />}
        key="usr-dd"
      />,
    ],
    []
  );

  return (
    <StyledWrapper>
      <ScreenLayoutComponent header={header} bottomButton={<RoundButton />}>
        {mockEventsList.map(event => (
          <Event key={event.id} event={event} viewType="list" />
        ))}
      </ScreenLayoutComponent>
    </StyledWrapper>
  );
};
