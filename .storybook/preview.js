import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import Normalize from 'themming/normalize';
import GlobalStyle from 'themming/globalStyle';
import theme from 'themming';

addDecorator(storyFn => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize>
        <GlobalStyle />
        {storyFn()}
      </Normalize>
    </ThemeProvider>
  );
});
