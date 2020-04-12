import React from 'react';
import styled from 'styled-components';
import theme from 'themming';

const StyledUl = styled.ul`
  padding: 0;
  color: ${theme.palette.dropdown};
  font-family: ${theme.typography.fontFamily.hind};
  font-size: ${theme.typography.fontSize[14]};
  letter-spacing: 0.7px;
  line-height: 24px;
  list-style: none;
  button {
    color: ${theme.palette.link};
    border: none;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    transition: 0.3s;
  }
`;

interface Props {
  onChange: (value: string) => void;
}

const FilterItems = (props: Props) => {
  const { onChange } = props;
  return (
    <StyledUl>
      <li>
        <button type="button" onClick={() => onChange('ALL EVENTS')}>
          ALL EVENTS
        </button>
      </li>
      <li>
        <button type="button" onClick={() => onChange('FUTURE EVENTS')}>
          FUTURE EVENTS
        </button>
      </li>
      <li>
        <button type="button" onClick={() => onChange('PAST EVENTS')}>
          PAST EVENTS
        </button>
      </li>
    </StyledUl>
  );
};

export default FilterItems;
