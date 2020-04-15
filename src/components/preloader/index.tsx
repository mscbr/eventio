import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { reAuth } from 'api/auth/reAuth';
import { AppState } from 'store';
import { logout, loginSuccess } from 'store/user/actions';

import Centered from 'components/centered';
import Spinner from 'components/spinner';
import RefreshTokenHandler from 'localStorage/refreshTokenHandler';

const Preloader: React.FC = props => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: AppState) => state.userReducer);

  if (user === undefined) {
    const refreshToken = RefreshTokenHandler.getToken();
    reAuth()
      .then(resp => dispatch(loginSuccess(resp.user)))
      .catch(() => {
        return dispatch(logout());
      });
    if (refreshToken) {
      return (
        <Centered>
          <Spinner />
        </Centered>
      );
    }
  }
  return <>{props.children}</>;
};
export default Preloader;
