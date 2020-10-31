import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import theme from 'themming';
import useWindowWidth from 'shared/hooks/useWindowWidth';
import Dropdown from 'components/dropdown';
import { EFilterTypes } from 'types/event';
import FilterAdornment from './parts/filterAdornment';
import FilterLabel from './parts/filterLabel';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 319px;
  height: 24px;
`;
const StyledFilter = styled.span<{ active?: boolean }>`
  color: ${({ active }) =>
    active ? theme.palette.data : theme.palette.editButton.label};
  font-size: ${theme.typography.fontSize[12]};
  font-weight: ${theme.typography.fontWeight.semiBold};
  letter-spacing: ${theme.typography.letterSpacing[1]};
  cursor: pointer;
`;
const StyledUl = styled.ul`
  padding: 0;
  color: ${theme.palette.dropdown};
  line-height: 24px;
  list-style: none;
  button {
    color: ${theme.palette.link};
    border: none;
    background: transparent;
    font-family: ${theme.typography.fontFamily.hind};
    font-size: ${theme.typography.fontSize[14]};
    font-weight: ${theme.typography.fontWeight.medium};
    letter-spacing: ${theme.typography.letterSpacing[1]};
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    transition: 0.3s;
  }
`;

interface Props {
  onChange: (filter: EFilterTypes) => void;
}

const EventsFilter = ({ onChange }: Props) => {
  const history = useHistory();
  const { eventsFilter } = useParams();
  // @ts-ignore
  const filter: keyof typeof EFilterTypes = Object.keys(EFilterTypes).includes(
    eventsFilter || ''
  )
    ? eventsFilter
    : 'all';
  const [activeFilter, setActiveFilter] = useState<EFilterTypes>(
    EFilterTypes[filter]
  );
  const upMobile = useWindowWidth() > theme.breakpoints.mobile;

  const onClick = (filterType: EFilterTypes) => {
    setActiveFilter(filterType);
    onChange(filterType);

    if (filterType === EFilterTypes.all) {
      history.push('/events/all');
    }
    if (filterType === EFilterTypes.future) {
      history.push('/events/future');
    }
    if (filterType === EFilterTypes.past) {
      history.push('/events/past');
    }
  };

  const dropDownItems = () => {
    return (
      <StyledUl>
        {Object.values(EFilterTypes).map(filterType => (
          <li key={filterType}>
            <StyledFilter
              active={filterType === activeFilter}
              onClick={() => onClick(filterType)}
            >
              {filterType.toUpperCase()} <br />
            </StyledFilter>
          </li>
        ))}
      </StyledUl>
    );
  };

  return (
    <>
      {upMobile ? (
        <StyledContainer>
          {Object.values(EFilterTypes).map(filterType => (
            <StyledFilter
              key={filterType}
              active={filterType === activeFilter}
              onClick={() => onClick(filterType)}
            >
              {filterType.toUpperCase()}
            </StyledFilter>
          ))}
        </StyledContainer>
      ) : (
        <Dropdown
          label={<FilterLabel>{activeFilter.toUpperCase()}</FilterLabel>}
          adornment={<FilterAdornment>SHOW: </FilterAdornment>}
          items={dropDownItems()}
          darkArrow
        />
      )}
    </>
  );
};

export default EventsFilter;
