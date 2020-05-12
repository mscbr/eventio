import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { formatDate, deepCompareObj } from 'shared/helpers';
import theme from 'themming';
import { setButton } from 'components/event/helpers';
import Detail from 'components/typography/detail';
import Title from 'components/typography/title';
import Subtitle from 'components/typography/subtitle';
import Description from 'components/typography/description';
import Capacity from 'components/event/parts/capacity';
import Button from 'components/button';
import { IEventList } from 'types/event';
import { AppState } from 'store/index';

const StyledGridView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
`;
const StyledTitle = styled.div`
  margin: 10px 0 0 0;
`;
const StyledDescription = styled.div`
  margin-top: 48px;
  text-align: justify;
  line-height: 24px;
  @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
    text-align: left;
  }
`;
const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin: auto auto 0;
`;

interface Props {
  event: IEventList;
}

const GridView = ({
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
  const [btnLabel, btnColor] = setButton(
    id || '',
    ownerId,
    attendees.map(user => user.id)
  );

  return (
    <StyledGridView>
      <Detail>{formatDate(startsAt)}</Detail>
      <StyledTitle>
        <Title>{title}</Title>
      </StyledTitle>
      <Subtitle>{`${firstName} ${lastName}`}</Subtitle>
      <StyledDescription>
        <Description>{description}</Description>
      </StyledDescription>
      <StyledFooter>
        <Capacity capacity={capacity} atendees={attendees.length} icon />
        <Button label={btnLabel} color={btnColor} />
      </StyledFooter>
    </StyledGridView>
  );
};

function compareProps(prevEvent: Props, nextEvent: Props) {
  return deepCompareObj(prevEvent, nextEvent);
}

export default React.memo(GridView, compareProps);
