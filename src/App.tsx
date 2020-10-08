import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { AppState } from 'store';
import Login from 'screens/login';
// import EventsList from 'screens/eventsList';
import Centered from 'components/centered';
import Spinner from 'components/spinner';
import AuthRoute from 'components/authRoute';
import { LOGOUT } from 'store/auth/actions';

const App = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: AppState) => state.userReducer);

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
        <Route path="/login">
          <Login />
        </Route>
        <AuthRoute
          exact
          path="/"
          component={() => (
            <button
              type="button"
              onClick={() => {
                dispatch(LOGOUT());
              }}
            >
              LOG OUT!
            </button>
          )}
        />
      </Switch>
    </>
  );
};

export default App;
