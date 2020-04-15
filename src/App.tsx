import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { AppState } from 'store';
import { logout } from 'store/user/actions';
import Login from 'screens/login';
import Centered from 'components/centered';
import Spinner from 'components/spinner';

const App = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state: AppState) => state.userReducer);

  if (loading) {
    return (
      <Centered>
        <Spinner />
      </Centered>
    );
  }

  return (
    <>
      {!user ? (
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Redirect to="/login" />
        </Switch>
      ) : (
        <Switch>
          <Route path="/">
            {() => (
              <button type="button" onClick={() => dispatch(logout())}>
                LOG OUT!
              </button>
            )}
          </Route>
          <Redirect to="/" />
        </Switch>
      )}
    </>
  );
};

export default App;
