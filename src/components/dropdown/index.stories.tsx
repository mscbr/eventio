import React, { useState } from 'react';
import styled from 'styled-components';
import Avatar from 'components/avatar';
import UserLabel from './parts/userLabel';
import UserItems from './parts/userItems';
import FilterLabel from './parts/filterLabel';
import FilterAdornment from './parts/filterAdornment';
import FilterItems from './parts/filterItems';
import Dropdown from './index';

const Wrapper = styled.div`
  width: 60%;
  height: 80%;
  margin: 50px;
  display: flex;
  flex-direction: column;
`;

export default { title: 'Atom/Dropdown' };

export const Menu = () => {
  const [filterType, setFilterType] = useState('ALL EVENTS');
  const handleFilterType = (value: string) => {
    setFilterType(value);
  };
  return (
    <Wrapper>
      <Dropdown
        label={<UserLabel>Maciej Scbr</UserLabel>}
        adornment={<Avatar firstName="Maciej" lastName="Scbr" />}
        items={<UserItems />}
      />
      <br />
      <Dropdown
        label={<FilterLabel>{filterType}</FilterLabel>}
        adornment={<FilterAdornment>SHOW: </FilterAdornment>}
        items={<FilterItems onChange={handleFilterType} />}
        dark
      />
    </Wrapper>
  );
};
