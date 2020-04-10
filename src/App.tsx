import React from 'react';
import Normalize from 'themming/normalize';
import GlobalStyle from 'themming/globalStyle';

const App = () => {
  return (
    <Normalize>
      <GlobalStyle />
      <div />
    </Normalize>
  );
};

export default App;
