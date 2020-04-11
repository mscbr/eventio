import React from 'react';
import styled from 'styled-components';
import theme from 'themming';
import iconAdd from 'assets/icons/icon-add.png';

const StyledButton = styled.button`
  width: 56px;
  height: 56px;
  background: ${theme.palette.data};
  color: ${theme.palette.surface};
  border-radius: 50%;
  border: none;
  box-shadow: 0px 6px 9px rgba(0, 0, 0, 0.15);
  &:hover {
    cursor: pointer;
    background: ${theme.palette.dataHover};
  }
  transition: 0.3s;
`;

const RoundButton = (props: { onClick?: () => void }) => {
  const { onClick } = props;
  return (
    <StyledButton onClick={onClick}>
      <img src={iconAdd} alt="add icon" />
    </StyledButton>
  );
};

export default RoundButton;
