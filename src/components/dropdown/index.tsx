import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import styled from 'styled-components';
import iconArrow from 'assets/icons/icon-arrow.png';
import iconArrowDark from 'assets/icons/icon-arrow-dark.png';
import Overlay from './parts/overlay';

const StyledDropdown = styled.div`
  position: relative;
`;

const StyledHead = styled.div<{ dark?: boolean }>`
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
    margin-top: ${props => (props.dark ? '-5px' : 'initial')};
  }
`;

interface Props {
  label?: JSX.Element;
  items?: JSX.Element;
  dark?: boolean;
  adornment?: JSX.Element;
}

const Dropdown = (props: Props) => {
  const { label, items, dark, adornment } = props;
  const [open, setOpen] = useState(false);
  const [headWidth, setHeadWidth] = useState<number>();
  const headRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // function could be defined more globally, but
  // haven't seen another use in the design
  const handleClickOutside = (
    e: MouseEvent,
    ref: React.RefObject<HTMLElement>,
    callback: () => void
  ) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useLayoutEffect(() => {
    setHeadWidth(headRef.current?.getBoundingClientRect().width);
  });

  useEffect(() => {
    setOpen(false);
  }, [props.label]);

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
      <StyledHead onClick={() => setOpen(state => !state)} ref={headRef} dark>
        {adornment && <div>{adornment}</div>}
        <div className="label">{label}</div>
        <div className="arrow">
          <img src={dark ? iconArrowDark : iconArrow} alt="arrow icon" />
        </div>
      </StyledHead>
      {open && <Overlay headWidth={headWidth}>{items}</Overlay>}
    </StyledDropdown>
  );
};

export default Dropdown;
