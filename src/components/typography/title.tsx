import React from 'react';
import styled from 'styled-components';
import theme from 'themming';

const StyledTitle = styled.h1`
  font-size: ${theme.typography.fontSize[22]};
  font-weight: ${theme.typography.fontWeight.regular};
  color: ${theme.palette.data};
  @media only screen and (min-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.typography.fontSize[28]};
  }
`;

const Title = (props: { children?: string }) => {
  return <StyledTitle>{props.children}</StyledTitle>;
};

export default Title;
