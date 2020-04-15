import React from 'react';
import styled from 'styled-components';
import theme from 'themming';
import Spinner from 'components/spinner';

const StyledButton = styled.button<{ color?: string; size?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.size === 'large' ? '240px' : '100px')};
  height: ${props => (props.size === 'large' ? '57px' : '32px')};
  background: ${props => {
    if (props.color === 'secondary') {
      return `${theme.palette.pink}`;
    }
    if (props.color === 'edit') {
      return `${theme.palette.editButton.surface}`;
    }
    return `${theme.palette.green}`;
  }};
  color: ${props =>
    props.color === 'edit'
      ? `${theme.palette.editButton.label}`
      : `${theme.palette.surface}`};
  border: none;
  border-radius: 5px;
  letter-spacing: ${theme.typography.letterSpacing[1]};
  font-family: ${theme.typography.fontFamily.hind};
  font-size: ${props =>
    props.size === 'large'
      ? `${theme.typography.fontSize[16]}`
      : `${theme.typography.fontSize[14]}`};
  font-weight: ${theme.typography.fontWeight.medium};
  padding-top: 5px;
  &:hover {
    cursor: pointer;
    background: ${props => {
      if (props.color === 'secondary') {
        return `${theme.palette.pinkHover}`;
      }
      if (props.color === 'edit') {
        return `${theme.palette.editButton.hover}`;
      }
      return `${theme.palette.greenHover}`;
    }};
  }
  transition: 0.3s;
`;

interface Props {
  color?: string;
  size?: string;
  label?: string;
  onClick?: () => void;
  loading?: boolean;
  className?: string;
}

const Button = (props: Props) => {
  const { color, size, label, onClick, loading, className } = props;
  return (
    <StyledButton
      size={size}
      color={color}
      onClick={onClick}
      disabled={loading}
      className={className}
    >
      {!loading ? label && label.toUpperCase() : <Spinner />}
    </StyledButton>
  );
};

export default Button;
