import React from 'react';
import styled from 'styled-components';
import theme from 'themming';

const StyledUl = styled.ul`
  padding: 0;
  color: ${theme.palette.dropdown};
  font-family: ${theme.typography.fontFamily.hind};
  font-size: ${theme.typography.fontSize[14]};
  letter-spacing: 0.7px;
  line-height: 24px;
  list-style: none;
  a {
    color: ${theme.palette.link};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    transition: 0.3s;
  }
`;

const UserItems = () => {
  return (
    <StyledUl>
      <li>
        <a href="#">Profile</a>
      </li>
      <li>
        <a href="#">Log Out</a>
      </li>
    </StyledUl>
  );
};

export default UserItems;
