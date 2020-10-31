import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import theme from 'themming';
import leftPanel from 'assets/layout/login-left-panel.png';
import { LOGOUT } from 'store/auth/actions';
import LoginPanel from './parts/loginPanel';

const StyledLayout = styled.div`
  display: flex;
  width: 100%;
  .leftPanel {
    display: none;
    img {
      height: 100vh;
      width: auto;
    }
  }
  .loginPanel {
    width: 100%;
    height: 100vh;
  }
  @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
    .leftPanel {
      display: inline;
    }
  }
`;

const Login = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LOGOUT());
  }, [dispatch]);
  return (
    <StyledLayout>
      <div className="leftPanel">
        <img src={leftPanel} alt="Left panel of login page" />
      </div>
      <div className="loginPanel">
        <LoginPanel />
      </div>
    </StyledLayout>
  );
};

export default Login;
