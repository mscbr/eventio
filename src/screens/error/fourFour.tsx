import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import theme from 'themming';
import leftPanel from 'assets/layout/login-left-panel.png';
import ErrorLayout from './parts/errorLayout';

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
  .errorPanel {
    width: 100%;
  }
  @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
    .leftPanel {
      display: inline;
    }
  }
`;

const ErrorScreen = () => {
  const history = useHistory();
  return (
    <StyledLayout>
      <div className="leftPanel">
        <img src={leftPanel} alt="Left panel" />
      </div>
      <div className="errorPanel">
        <ErrorLayout
          title="404 Error - page not found"
          message="Seems like Darth Vader just hits our website and drops it down.
          Please press the refresh button and everything should be fine again."
          buttonLabel="Refresh"
          onClick={() => history.go(0)}
        />
      </div>
    </StyledLayout>
  );
};

export default ErrorScreen;
