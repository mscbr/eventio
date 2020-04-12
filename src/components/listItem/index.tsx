import React, { useState } from 'react';
import styled from 'styled-components';
import ListBtn from './parts/listBtn';
import GridBtn from './parts/gridBtn';

const StyledSwitch = styled.div`
  width: 56px;
  height: 24px;
  display: flex;
  justify-content: space-between;
`;

type ViewType = 'list' | 'grid';

interface Props {
  defaultView?: ViewType;
  onChange?: () => void;
}
const ListItem = (props: Props) => {
  const { defaultView } = props;
  const [view, setView] = useState<ViewType>(defaultView || 'grid');
  return (
    <div>
      {view === 'grid' && (
        <StyledSwitch>
          <GridBtn active /> <ListBtn onClick={() => setView('list')} />
        </StyledSwitch>
      )}
      {view === 'list' && (
        <StyledSwitch>
          <GridBtn onClick={() => setView('grid')} /> <ListBtn active />
        </StyledSwitch>
      )}
    </div>
  );
};

export default ListItem;
