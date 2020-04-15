import React from 'react';
import { addDecorator } from '@storybook/react';
import GlobalStyle from 'themming/globalStyle';
import Normalize from 'themming/normalize';
import { BrowserRouter as Router, Route } from 'react-router-dom';

addDecorator(storyFn => {
  return (
    <Router>
      <GlobalStyle />
      <Route pth="*" component={() => storyFn()} />
    </Router>
  );
});
