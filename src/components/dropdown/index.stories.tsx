import React from 'react';
import styled from 'styled-components';
import Avatar from 'components/avatar';
import UserLabel from './parts/userLabel';
import UserItems from './parts/userItems';
import Dropdown from './index';

const Wrapper = styled.div`
  width: 60%;
  height: 80%;
  margin: 50px;
  display: flex;
  flex-direction: column;
`;

export default { title: 'Atoms/Dropdown' };

export const Menu = () => {
  return (
    <Wrapper>
      <Dropdown
        label={<UserLabel>Maciej Scbr</UserLabel>}
        adornment={<Avatar firstName="Maciej" lastName="Scbr" />}
        items={<UserItems />}
      />
    </Wrapper>
  );
};
