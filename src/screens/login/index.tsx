import React, { useState } from 'react';
import TextInput from 'components/textInput';

const Login = () => {
  const [login, setLogin] = useState('');
  return (
    <div>
      <p>LOGIN</p>
      <TextInput
        label="login"
        value={login}
        onChange={value => setLogin(value)}
      />
    </div>
  );
};

export default Login;
