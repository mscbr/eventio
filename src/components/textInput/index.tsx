import React, { useState } from 'react';
import styled from 'styled-components';
import theme from 'themming';

const StyledTextInput = styled.div<{
  active?: boolean;
  error?: boolean;
  value?: string;
}>`
  width: 100%;
  height: 88px;
  font-family: ${theme.typography.fontFamily.hind};
  .inputWrapper {
    position: relative;
    width: 100%;
  }
  label {
    position: absolute;
    bottom: ${props => (!props.active && !props.value ? 'initial' : '33px')};
    font-size: ${props =>
      !props.active
        ? `${theme.typography.fontSize[18]}`
        : `${theme.typography.fontSize[14]}`};
    color: ${props =>
      !props.active
        ? `${theme.palette.label}`
        : `${theme.palette.labelActive}`};
    transition: font-size 0.2s;
  }
  input {
    height: 33px;
    width: 100%;
    font-size: ${theme.typography.fontSize[18]};
    color: ${theme.palette.data};
    caret-color: ${theme.palette.label};
    border: none;
    outline: none;
    border-bottom: 1px solid;
    border-bottom-color: ${props => {
      if (props.error) {
        return `${theme.palette.pink}`;
      }
      if (props.active) {
        return `${theme.palette.underlineActive}`;
      }
      return `${theme.palette.underline}`;
    }};
    transition: 0.3s;
  }
  .inputIcon {
    position: absolute;
    width: 24px;
    height: 24px;
    right: 0;
    top: 0;
    &:hover {
      cursor: pointer;
    }
  }
  .helperText {
    color: ${theme.palette.pink};
    font-size: ${theme.typography.fontSize[18]};
  }
`;

interface Props {
  id?: string;
  label: string;
  value?: string;
  onChange: (value: string) => void;
  error?: boolean;
  helperText?: string;
  type?: string;
  icon?: JSX.Element;
}

const TextInput = (props: Props) => {
  const { id, label, value, onChange, error, helperText, type, icon } = props;
  const [active, setActive] = useState(false);
  // useEffect(() => {
  //   value ? setActive(true) : setActive(false);
  // }, [value]);
  return (
    <StyledTextInput active={active} error={error} value={value}>
      <div className="inputWrapper">
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          value={value}
          onChange={e => onChange(e.target.value)}
          type={type || 'text'}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
        />
        {icon && <div className="inputIcon">{icon}</div>}
      </div>
      <span className="helperText">{helperText}</span>
    </StyledTextInput>
  );
};
export default TextInput;
