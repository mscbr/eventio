import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { addDecorator } from '@storybook/react';

import rootReducer, { AppState } from 'store/storybook';
import GlobalStyle from 'themming/globalStyle';
import Normalize from 'themming/normalize';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const store = createStore(rootReducer, applyMiddleware(thunk));

addDecorator(storyFn => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Route pth="*" component={() => storyFn()} />
      </Router>
    </Provider>
  );
});
