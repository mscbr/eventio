import React from 'react';

import theme from 'themming';
import useWindowWidth from 'shared/hooks/useWindowWidth';
import { IEvent, ViewType } from 'types/event';
import Surface from 'components/surface';
import GridView from './parts/gridView';
import ListView from './parts/listView';

interface Props {
  event: IEvent;
  viewType?: ViewType;
}

const Event = ({ viewType, event }: Props) => {
  const upMobile = useWindowWidth() > theme.breakpoints.mobile;

  // optimization hint: check if those values can be
  // computed once and passed
  const surfaceSize = () => {
    if (upMobile)
      return {
        height: `${viewType === 'grid' ? '296px' : '72px'}`,
        width: `${viewType === 'grid' ? 'auto' : '100%'}`,
        padding: `${viewType === 'list' ? '0 32px 0 32px' : '32px'}`,
      };

    return {
      height: `${viewType === 'list' ? '136px' : '296px'}`,
      width: '98%',
      padding: `${viewType === 'list' ? '5.28px 16px 16px 16px' : '24px'}`,
    };
  };
  return (
    <Surface {...surfaceSize()}>
      {viewType !== 'list' && <GridView event={event} />}
      {viewType === 'list' && <ListView event={event} />}
    </Surface>
  );
};

export default React.memo(Event);
