import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import GlobalStyle from 'themming/globalStyle';
import Login from 'screens/login';

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <div />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Redirect to="/login" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
