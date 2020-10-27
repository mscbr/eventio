import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AppState } from 'store';
import Login from 'screens/login';
import EventsList from 'screens/eventsList';
import Centered from 'components/centered';
import Spinner from 'components/spinner';
import AuthRoute from 'components/authRoute';

const App = () => {
  const { loading, user } = useSelector((state: AppState) => state.userReducer);

  if (loading) {
    return (
      <Centered>
        <Spinner />
      </Centered>
    );
  }

  return (
    <>
      <Switch>
        <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
        <AuthRoute exact path="/" component={EventsList} />
        <AuthRoute
          exact
          path="/event/:id/edit"
          component={() => <span>EDIT EVENT</span>}
        />
      </Switch>
    </>
  );
};

export default App;
