import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from 'themming/globalStyle';
import rootReducer from 'store';
import Preloader from 'components/preloader';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk));

const AppRoot = (): JSX.Element => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Preloader>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Preloader>
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <AppRoot />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
