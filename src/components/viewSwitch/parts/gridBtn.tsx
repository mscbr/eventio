import React from 'react';
import styled from 'styled-components';
import iconGrid from 'assets/icons/icon-grid.png';
import iconGridFilled from 'assets/icons/icon-grid-filled.png';

const StyledGridBtn = styled.div`
  width: 24px;
  height: 24px;
  img {
    width: 17px;
    height: 13px;
  }
  &:hover {
    cursor: pointer;
  }
`;

interface Props {
  active?: boolean;
  onClick?: () => void;
}

const GridBtn = ({ active, onClick }: Props) => {
  return (
    <StyledGridBtn onClick={onClick}>
      <img src={active ? iconGridFilled : iconGrid} alt="Grid icon" />
    </StyledGridBtn>
  );
};

export default GridBtn;
