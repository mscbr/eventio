import React, { useState } from 'react';
import styled from 'styled-components';
import iconShow from 'assets/icons/icon-show.png';
import TextInput from './index';

const Wrapper = styled.div`
  width: 50%;
`;

export default { title: 'Atom/Textfield' };

export const BasicTextInput = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Wrapper>
      <br />
      <br />
      <TextInput
        id="basicTextInput"
        label="Email"
        value={inputValue}
        onChange={value => setInputValue(value)}
      />
      <TextInput
        id="basicTextInput2"
        label="Error input"
        value={inputValue}
        onChange={value => setInputValue(value)}
        error
        helperText="Incorect input value"
      />
      <TextInput
        id="passwordInput"
        label="Password"
        value={inputValue}
        onChange={value => setInputValue(value)}
        type={showPassword ? 'text' : 'password'}
        icon={
          <div onClick={() => setShowPassword(state => !state)}>
            <img src={iconShow} alt="icon-show" />
          </div>
        }
      />
    </Wrapper>
  );
};
