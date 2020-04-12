import React from 'react';
import styled from 'styled-components';
import ListItem from './index';

const Wrapper = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
`;

export default { title: 'Atom/ListItem' };

export const List = () => {
  return (
    <Wrapper>
      <ListItem />
    </Wrapper>
  );
};
