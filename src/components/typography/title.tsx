import React from 'react';
import styled from 'styled-components';
import theme from 'themming';

const StyledTitle = styled.span<{ fontSize?: string }>`
  display: block;
  font-size: ${({ fontSize }) => fontSize || theme.typography.fontSize[22]};
  font-weight: ${theme.typography.fontWeight.regular};
  color: ${theme.palette.data};
  line-height: 48px;
  @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
    font-size: ${({ fontSize }) => fontSize || theme.typography.fontSize[28]};
  }
`;

const Title = (props: { children?: string; fontSize?: string }) => {
  return <StyledTitle fontSize={props.fontSize}>{props.children}</StyledTitle>;
};

export default Title;
