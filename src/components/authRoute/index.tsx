import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import TokenHandler from 'localStorage/tokenHandler';
import { REFRESH_TOKEN_AUTH } from 'store/auth/actions';
import { AppState } from 'store';

// @ts-ignore
const AuthRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: AppState) => state.userReducer);

  const checkAuth = () => {
    const token = TokenHandler.getToken();
    const refreshToken = TokenHandler.getRefreshToken();

    if (!user && refreshToken) {
      dispatch(REFRESH_TOKEN_AUTH());
    }
    if (!token || !refreshToken) {
      return false;
    }
    return true;
  };

  return (
    <Route
      {...rest}
      render={props =>
        checkAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      }
    />
  );
};
export default AuthRoute;
