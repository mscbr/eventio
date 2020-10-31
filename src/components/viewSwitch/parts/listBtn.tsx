import React from 'react';
import styled from 'styled-components';
import iconList from 'assets/icons/icon-list.png';
import iconListFilled from 'assets/icons/icon-list-filled.png';

const StyledListBtn = styled.div`
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

const ListBtn = ({ active, onClick }: Props) => {
  return (
    <StyledListBtn onClick={onClick}>
      <img src={active ? iconListFilled : iconList} alt="List icon" />
    </StyledListBtn>
  );
};

export default ListBtn;
