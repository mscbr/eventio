import React from 'react';
import styled from 'styled-components';
import Button from './index';
import RoundButton from './roundButton';
import DeleteButton from './deleteButton';

const Wrapper = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
`;

export default { title: 'Atoms/Button' };

export const RegularButton = () => {
  return (
    <Wrapper>
      <Button size="large" label="sign in" />
      <br />
      <Button size="large" label="sign in" loading />
      <br />
      <Button label="Join" />
      <br />
      <Button label="Leave" color="secondary" />
      <br />
      <Button label="edit" color="edit" />
      <br />
      <RoundButton />
      <br />
      <DeleteButton />
    </Wrapper>
  );
};
