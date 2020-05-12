import React, { useState } from 'react';
import styled from 'styled-components';

import { ViewType } from 'types/event';
import ViewSwitch from './index';

const Wrapper = styled.div`
  margin: 20px 0 0 20px;
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
`;

export default { title: 'Atoms/ListItem' };

export const List = () => {
  const [view, setView] = useState<ViewType>('grid');
  return (
    <Wrapper>
      <ViewSwitch viewType={view} onChange={setView} />
    </Wrapper>
  );
};
