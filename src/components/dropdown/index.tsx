import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import styled from 'styled-components';

import iconArrow from 'assets/icons/icon-arrow.png';
import iconArrowDark from 'assets/icons/icon-arrow-dark.png';
import { handleClickOutside } from 'shared/helpers';
import Overlay from './parts/overlay';

const StyledDropdown = styled.div`
  position: relative;
`;

const StyledHead = styled.div<{ darkArrow?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  &:hover {
    cursor: pointer;
  }
  .label {
    margin-left: 8px;
  }
  .arrow {
    margin-left: 8px;
    margin-top: ${({ darkArrow }) => (darkArrow ? '-5px' : 'initial')};
  }
`;

interface Props {
  label?: JSX.Element;
  items?: JSX.Element;
  darkArrow?: boolean;
  adornment?: JSX.Element;
}

const Dropdown = ({ label, items, darkArrow, adornment }: Props) => {
  const [open, setOpen] = useState(false);
  const [headWidth, setHeadWidth] = useState<number>();
  const headRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    setHeadWidth(headRef.current?.getBoundingClientRect().width);
  }, [setHeadWidth]);

  useEffect(() => {
    document.addEventListener('mousedown', (e: MouseEvent) =>
      handleClickOutside(e, dropdownRef, () => setOpen(false))
    );
    return () => {
      document.removeEventListener('mousedown', (e: MouseEvent) =>
        handleClickOutside(e, dropdownRef, () => setOpen(false))
      );
    };
  }, []);

  return (
    <StyledDropdown ref={dropdownRef}>
      <StyledHead
        onClick={() => setOpen(state => !state)}
        ref={headRef}
        darkArrow
      >
        {adornment && <div>{adornment}</div>}
        <div className="label">{label}</div>
        <div className="arrow">
          <img src={darkArrow ? iconArrowDark : iconArrow} alt="arrow icon" />
        </div>
      </StyledHead>
      {open && (
        <Overlay onClick={() => setOpen(false)} headWidth={headWidth}>
          {items}
        </Overlay>
      )}
    </StyledDropdown>
  );
};

export default Dropdown;
