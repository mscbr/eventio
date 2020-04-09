import React from 'react';
import { ThemeProvider } from 'styled-components';
import Normalize from 'themming/normalize';
import GlobalStyle from 'themming/globalStyle';
import theme from 'themming';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize>
        <GlobalStyle />
        <div />
      </Normalize>
    </ThemeProvider>
  );
};

export default App;
