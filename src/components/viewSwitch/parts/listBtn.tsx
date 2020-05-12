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

const ListBtn = (props: { active?: boolean; onClick?: () => void }) => {
  const { active, onClick } = props;
  return (
    <StyledListBtn onClick={onClick}>
      <img src={active ? iconListFilled : iconList} alt="list icon" />
    </StyledListBtn>
  );
};

export default ListBtn;
