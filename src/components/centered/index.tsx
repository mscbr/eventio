import React from 'react';
import styled from 'styled-components';

interface CenteredProps {
  children?: React.ReactNode;
}

const StyledCenter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .centered {
    position: relative;
    text-align: center;
    top: 50%;
    left: 50%;
  }
`;

const Centered: React.FC<CenteredProps> = props => {
  return (
    <StyledCenter>
      <div className="centered">{props.children}</div>
    </StyledCenter>
  );
};

export default Centered;
