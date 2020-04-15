import React from 'react';
import styled from 'styled-components';
import theme from 'themming';

const StyledSubtitle = styled.span`
  font-size: ${theme.typography.fontSize[14]};
  font-weight: ${theme.typography.fontWeight.light};
  color: ${theme.palette.dropdown};
  @media only screen and (min-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.typography.fontSize[18]};
  }
`;

const Subtitle = (props: { children?: string }) => {
  return <StyledSubtitle>{props.children}</StyledSubtitle>;
};

export default Subtitle;
