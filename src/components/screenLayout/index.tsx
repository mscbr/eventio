import React, { ReactNode, ReactNodeArray } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'themming';

import logo from 'assets/layout/logo.png';

const StyledScreenLayout = styled.div`
  background: ${theme.palette.background};
  min-height: 100vh;
  padding: 8px;
`;
const StyledHeader = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledLogo = styled.img`
  height: 24px;
  width: 23px;
  cursor: pointer;
`;
const StyledBottom = styled.div`
  position: fixed;
  bottom: 32px;
  right: 32px;
`;

interface Props {
  header?: ReactNodeArray;
  bottomButton?: ReactNode;
}

const ScreenLayout: React.FC<Props> = ({ children, header, bottomButton }) => {
  const history = useHistory();
  return (
    <StyledScreenLayout>
      <StyledHeader>
        {[
          <StyledLogo
            onClick={() => history.push('/events/')}
            src={logo}
            alt="Logo"
            key="logo"
          />,
          ...(header || ['']),
        ]}
      </StyledHeader>
      {children}
      <StyledBottom>{bottomButton}</StyledBottom>
    </StyledScreenLayout>
  );
};

export default ScreenLayout;
