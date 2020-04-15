import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import theme from 'themming';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${theme.palette.label};
  font-weight: ${theme.typography.fontWeight.light};
  font-size: ${theme.typography.fontSize[14]};
  letter-spacing: initial;
  span {
    color: ${theme.palette.dropdown};
    font-weight: ${theme.typography.fontWeight.medium};
  }
`;

const SignupLink = (props: { className?: string }) => {
  return (
    <StyledLink to="#" className={props.className}>
      Don't have an account? <span>SIGN UP</span>
    </StyledLink>
  );
};

export default SignupLink;
