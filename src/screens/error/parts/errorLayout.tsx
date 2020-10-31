import React, { ReactElement } from 'react';
import styled from 'styled-components';

import theme from 'themming';
import Title from 'components/typography/title';
import Subtitle from 'components/typography/subtitle';
import Button from 'components/button';
import vaderIcon from 'assets/icons/icon-vader.png';

const StyledLayout = styled.div`
  height: 100vh;
  padding: 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .vaderIcon {
    position: absolute;
    top: 20%;
    left: 0;
    margin-left: -150px;
    z-index: -1;
  }
`;

const StyledAdornment = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 40px;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
    display: block;
    max-width: 522px;
    padding: initial;
  }
`;

const StyledText = styled.div`
  line-height: 24px;
  margin-bottom: 40px;
`;

interface Props {
  title: string;
  message: string;
  buttonLabel: string;
  onClick: () => void;
  adornment?: ReactElement;
}

const ErrorLayout = ({
  title,
  message,
  buttonLabel,
  onClick,
  adornment,
}: Props) => {
  return (
    <StyledLayout>
      <StyledAdornment>{adornment}</StyledAdornment>
      <StyledContent>
        <StyledText>
          <Title>{title}</Title>
          <Subtitle>{message}</Subtitle>
        </StyledText>
        <Button
          size="large"
          label={buttonLabel}
          color="error"
          onClick={onClick}
        />
      </StyledContent>
      <img src={vaderIcon} alt="Darth Vader icon" className="vaderIcon" />
    </StyledLayout>
  );
};

export default ErrorLayout;
