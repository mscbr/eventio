import React from 'react';
import styled from 'styled-components';
import theme from 'themming';

const StyledSpan = styled.span`
  color: ${theme.palette.dropdown};
  font-family: ${theme.typography.fontFamily.hind};
  font-size: ${theme.typography.fontSize[14]};
  letter-spacing: 0.7px;
`;

const UserLabel: React.FC = ({ children }) => {
  return <StyledSpan>{children}</StyledSpan>;
};

export default UserLabel;
