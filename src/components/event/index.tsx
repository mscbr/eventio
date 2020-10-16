import React from 'react';
import styled from 'styled-components';

import theme from 'themming';
import { IEvent, ViewType } from 'types/event';
import GridView from './parts/gridView';
import ListView from './parts/listView';

const StyledSurface = styled.div<{ viewType: ViewType }>`
  background: ${theme.palette.surface};
  height: ${({ viewType }) => (viewType === 'list' ? '136px' : '296px')};
  width: 98%;
  padding: ${({ viewType }) =>
    viewType === 'list' ? '5.28px 16px 16px 16px' : '24px'};
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.108696);
  border-radius: 2px;
  margin-bottom: 16px;
  box-sizing: border-box;
  overflow: hidden;
  @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
    height: ${({ viewType }) => (viewType === 'grid' ? '296px' : '72px')};
    width: ${({ viewType }) => (viewType === 'grid' ? 'auto' : '100%')};
    padding: ${({ viewType }) =>
      viewType === 'list' ? '0 32px 0 32px' : '32px'};
  }
`;

interface Props {
  event: IEvent;
  viewType?: ViewType;
}

const Event = ({ viewType, event }: Props) => {
  return (
    <StyledSurface viewType={viewType || 'grid'}>
      {viewType !== 'list' && <GridView event={event} />}
      {viewType === 'list' && <ListView event={event} />}
    </StyledSurface>
  );
};

export default Event;
