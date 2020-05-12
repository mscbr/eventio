import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { formatDate, deepCompareObj } from 'shared/helpers';
import theme from 'themming';
import useWindowWidth from 'shared/hooks/useWindowWidth';
import { setButton } from 'components/event/helpers';
import Detail from 'components/typography/detail';
import Title from 'components/typography/title';
import Description from 'components/typography/description';
import Capacity from 'components/event/parts/capacity';
import Button from 'components/button';
import { IEventList } from 'types/event';
import { AppState } from 'store/index';
import Cell from './cell';

const StyledListView = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: 100%;
  @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
    flex-direction: row;
    align-items: baseline;
    white-space: nowrap;
  }
`;
const StyledOverflow = styled.div<{ color?: string }>`
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ color }) => color || 'inherit'};
`;
const StyledDescription = styled.div`
  margin-top: -8px;
  text-align: justify;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${theme.palette.dropdown};
  @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
    margin-top: initial;
    text-align: left;
  }
`;
const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: auto auto 0;
`;

interface Props {
  event: IEventList;
}

const ListView = ({
  event: {
    startsAt,
    title,
    capacity,
    attendees,
    owner: { firstName, lastName, id: ownerId },
    description,
  },
}: Props) => {
  const id = useSelector((state: AppState) => state.userReducer.user?.id);
  const upMobile = useWindowWidth() > theme.breakpoints.mobile;
  const [btnLabel, btnColor] = setButton(
    id || '',
    ownerId,
    attendees.map(user => user.id)
  );

  return (
    <>
      {!upMobile ? (
        <StyledListView>
          <Title>{title}</Title>
          <StyledDescription>
            <Description>{description}</Description>
          </StyledDescription>
          <StyledFooter>
            <div>
              <Detail>{formatDate(startsAt)}</Detail>
              <Capacity capacity={capacity} atendees={attendees.length} />
            </div>
            <Button label={btnLabel} color={btnColor} />
          </StyledFooter>
        </StyledListView>
      ) : (
        <StyledListView>
          <Cell width="245px" margin="0 40px 0 0">
            <StyledOverflow color={theme.palette.data}>
              <Title fontSize={theme.typography.fontSize[18]}>{title}</Title>
            </StyledOverflow>
          </Cell>
          <Cell width="240px" margin="0 40px 0 0">
            <StyledDescription>
              <Description>{description}</Description>
            </StyledDescription>
          </Cell>
          <Cell width="101px" margin="0 40px 0 0">
            <StyledOverflow color={theme.palette.owner}>
              <Detail color={theme.palette.owner}>
                {`${firstName} ${lastName}`}
              </Detail>
            </StyledOverflow>
          </Cell>
          <Cell width="138px" margin="0 40px 0 0">
            <StyledOverflow color={theme.palette.detail}>
              <Detail>{formatDate(startsAt)}</Detail>
            </StyledOverflow>
          </Cell>
          <Cell width="102px" margin="0 40px 0 0">
            <Capacity capacity={capacity} atendees={attendees.length} />
          </Cell>
          <Cell>
            <Button label={btnLabel} color={btnColor} />
          </Cell>
        </StyledListView>
      )}
    </>
  );
};

function compareProps(prevEvent: Props, nextEvent: Props) {
  return deepCompareObj(prevEvent, nextEvent);
}

export default React.memo(ListView, compareProps);
