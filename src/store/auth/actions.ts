import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { signIn } from 'api/auth/signIn';
import { reAuth } from 'api/auth/reAuth';
import { prepareActions } from 'store/helpers';
import TokenHandler from 'localStorage/tokenHandler';
import { EUserActionTypes, IAuthState, IUsersAction } from './types';

const actionsData = [
  [EUserActionTypes.LOGIN_REQUEST, 'loading'],
  [EUserActionTypes.LOGIN_SUCCESS, 'user'],
  [EUserActionTypes.LOGIN_FAIL, 'error'],
  [EUserActionTypes.LOGOUT],
];
const actions = prepareActions(actionsData);
export default actions;

export const LOGOUT = (): IUsersAction => {
  TokenHandler.clearToken();
  TokenHandler.clearRefreshToken();
  return {
    type: EUserActionTypes.LOGOUT,
    payload: {},
  };
};

export const LOGIN = (
  email: string,
  password: string
): ThunkAction<void, IAuthState, undefined, IUsersAction> => async (
  dispatch: ThunkDispatch<{}, {}, IUsersAction>
) => {
  dispatch(actions.LOGIN_REQUEST());
  try {
    const response = await signIn(email, password);
    dispatch(actions.LOGIN_SUCCESS(response));
  } catch (err) {
    dispatch(actions.LOGIN_FAIL(err));
  }
};

export const REFRESH_TOKEN_AUTH = (): ThunkAction<
  void,
  IAuthState,
  undefined,
  IUsersAction
> => async (dispatch: ThunkDispatch<{}, {}, IUsersAction>) => {
  dispatch(actions.LOGIN_REQUEST());
  const refreshToken = TokenHandler.getRefreshToken();
  if (!refreshToken) return dispatch(actions.LOGOUT());
  try {
    const response = await reAuth(refreshToken);
    dispatch(actions.LOGIN_SUCCESS(response));
  } catch (err) {
    dispatch(actions.LOGIN_FAIL(err));
  }
};
