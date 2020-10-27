import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import theme from 'themming';
import { LOGOUT } from 'store/auth/actions';

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
  const dispatch = useDispatch();

  const handleLogout = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void => {
    e.preventDefault();
    dispatch(LOGOUT());
  };

  return (
    <StyledUl>
      <li>
        <Link to="/">Profile</Link>
      </li>
      <li>
        <Link to="/login" onClick={handleLogout}>
          Log Out
        </Link>
      </li>
    </StyledUl>
  );
};

export default React.memo(UserItems);
