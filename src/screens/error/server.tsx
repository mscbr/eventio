import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import theme from 'themming';
import leftPanel from 'assets/layout/login-left-panel.png';
import SignupLink from 'screens/login/parts/signupLink';
import ErrorLayout from './parts/errorLayout';

const StyledLayout = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  .leftPanel {
    display: none;
    img {
      height: 100%;
      width: 480px;
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

interface Props {
  status: number;
  statusText: string;
}

const ServerErrorScreen = ({ status, statusText }: Props) => {
  const history = useHistory();
  return (
    <StyledLayout>
      <div className="leftPanel">
        <img src={leftPanel} alt="Left panel error page" />
      </div>
      <div className="errorPanel">
        <ErrorLayout
          title={`${status || 'Server'} - Error`}
          message={`${statusText ||
            'Seems like Darth Vader just hits our website and drops it down. Please press the refresh button and everything should be fine again.'}`}
          buttonLabel="Refresh"
          onClick={() => history.go(0)}
          adornment={<SignupLink />}
        />
      </div>
    </StyledLayout>
  );
};

export default ServerErrorScreen;
