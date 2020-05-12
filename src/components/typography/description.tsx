import React from 'react';
import styled from 'styled-components';
import theme from 'themming';

const StyledDescription = styled.span`
  font-size: ${theme.typography.fontSize[16]};
  font-weight: ${theme.typography.fontWeight.light};
  color: ${theme.palette.dropdown};
`;

const Description = (props: { children?: string }) => {
  return <StyledDescription>{props.children}</StyledDescription>;
};

export default Description;
