import React from 'react';
import styled from 'styled-components';
import theme from 'themming';

const StyledSpan = styled.span`
  color: ${theme.palette.editButton.label};
  font-family: ${theme.typography.fontFamily.hind};
  font-weight: ${theme.typography.fontWeight.medium};
  font-size: ${theme.typography.fontSize[12]};
  letter-spacing: 0.7px;
`;

const FilterAdornment = (props: { children?: string }) => {
  return <StyledSpan>{props.children}</StyledSpan>;
};

export default FilterAdornment;
