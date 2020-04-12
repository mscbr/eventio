import React from 'react';
import styled from 'styled-components';
import theme from 'themming';

const StyledOverlay = styled.div<{ headWidth?: number }>`
  position: absolute;
  width: ${props =>
    props.headWidth ? `${props.headWidth + 25}px` : 'inherit'};
  margin-top: 17px;
  padding-left: 16px;
  background: ${theme.palette.surface};
  box-sizing: border-box;
  border-radius: 14px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  z-index: 100;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: ${props => (props.headWidth ? `${props.headWidth - 18}px` : '20px')};
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 15px solid transparent;
    border-bottom-color: ${theme.palette.surface};
    border-top: 0;
    margin-top: -10px;
  }
`;

interface Props {
  children?: JSX.Element;
  headWidth?: number;
}

const Overlay = (props: Props) => {
  const { children, headWidth } = props;
  return <StyledOverlay headWidth={headWidth}>{children}</StyledOverlay>;
};
export default Overlay;
