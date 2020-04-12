import React from 'react';
import styled from 'styled-components';
import theme from 'themming';

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${theme.palette.editButton.surface};
  color: ${theme.palette.dropdown};
  border-radius: 50%;
  border: none;
  span {
    font-family: ${theme.typography.fontFamily.hind};
    font-size: ${theme.typography.fontSize[14]};
    margin-top: 3px;
  }
  transition: 0.3s;
`;

interface Props {
  firstName?: string;
  lastName?: string;
}

const Avatar = (props: Props) => {
  const { firstName, lastName } = props;
  const initials = `${firstName && firstName[0]}${lastName && lastName[0]}`;
  return (
    <StyledButton>
      <span>{initials}</span>
    </StyledButton>
  );
};

export default Avatar;
