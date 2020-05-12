import React, { useState } from 'react';
import styled from 'styled-components';

import theme from 'themming';
import leftPanel from 'assets/layout/login-left-panel.png';
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
  const [login, setLogin] = useState('');
  return (
    <StyledLayout>
      <div className="leftPanel">
        <img src={leftPanel} alt="login left panel" />
      </div>
      <div className="loginPanel">
        <LoginPanel />
      </div>
    </StyledLayout>
  );
};

export default Login;
