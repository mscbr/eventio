import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AppState } from 'store';
import Login from 'screens/login';
import EventsList from 'screens/eventsList';
import CreateEvent from 'screens/createEvent';
import EventDetail from 'screens/eventDetail';
import Centered from 'components/centered';
import Spinner from 'components/spinner';
import AuthRoute from 'components/authRoute';
import ErrorScreen from 'screens/error/fourFour';
import ServerErrorScreen from 'screens/error/server';

const App = () => {
  const { loading, user } = useSelector((state: AppState) => state.userReducer);
  const { isError, status, statusText } = useSelector(
    (state: AppState) => state.serverErrorReducer
  );

  if (loading) {
    return (
      <Centered>
        <Spinner />
      </Centered>
    );
  }
  if (isError) {
    return <ServerErrorScreen status={status} statusText={statusText} />;
  }

  return (
    <>
      <Switch>
        <Route path="/login">
          {!user ? <Login /> : <Redirect to="/events" />}
        </Route>
        <AuthRoute exact path="/events/:eventsFilter?" component={EventsList} />
        <AuthRoute exact path="/event/detail/:id" component={EventDetail} />
        <AuthRoute
          exact
          path="/event/:id/edit"
          component={() => <span>EDIT EVENT</span>}
        />
        <AuthRoute exact path="/event/create" component={CreateEvent} />
        <AuthRoute exact path="/" component={() => <Redirect to="/events" />} />
        <Route component={ErrorScreen} />
      </Switch>
    </>
  );
};

export default App;
