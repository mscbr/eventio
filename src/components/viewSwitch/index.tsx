import React from 'react';
import styled from 'styled-components';

import { ViewType } from 'types/event';
import ListBtn from './parts/listBtn';
import GridBtn from './parts/gridBtn';

const StyledSwitch = styled.div`
  width: 56px;
  height: 24px;
  display: flex;
  justify-content: space-between;
`;

interface Props {
  viewType: ViewType;
  onChange: (viewType: ViewType) => void;
}
const ViewSwitch = ({ viewType, onChange }: Props) => {
  return (
    <div>
      {viewType !== 'list' && (
        <StyledSwitch>
          <GridBtn active /> <ListBtn onClick={() => onChange('list')} />
        </StyledSwitch>
      )}
      {viewType === 'list' && (
        <StyledSwitch>
          <GridBtn onClick={() => onChange('grid')} /> <ListBtn active />
        </StyledSwitch>
      )}
    </div>
  );
};

export default ViewSwitch;
