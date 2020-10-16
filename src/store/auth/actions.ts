import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { signIn } from 'api/handlers/signIn';
import { reAuth } from 'api/handlers/reAuth';
import { prepareActions } from 'store/helpers';
import TokenHandler from 'localStorage/tokenHandler';
import { EUserActionTypes, IAuthState, IUsersAction } from './types';

const ACTIONS_DATA = [
  [EUserActionTypes.LOGIN_REQUEST],
  [EUserActionTypes.LOGIN_SUCCESS, 'user'],
  [EUserActionTypes.LOGIN_FAIL, 'error'],
  [EUserActionTypes.LOGOUT],
];
const ACTIONS = prepareActions(ACTIONS_DATA);
export default ACTIONS;

export const LOGOUT = (): IUsersAction => {
  window.localStorage.clear();
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
  // dispatch(ACTIONS[EUserActionTypes.LOGIN_REQUEST]());
  try {
    const response = await signIn(email, password);
    dispatch(ACTIONS[EUserActionTypes.LOGIN_SUCCESS](response));
  } catch (err) {
    dispatch(ACTIONS[EUserActionTypes.LOGIN_FAIL](err));
  }
};

export const REFRESH_TOKEN_AUTH = (): ThunkAction<
  void,
  IAuthState,
  undefined,
  IUsersAction
> => async (dispatch: ThunkDispatch<{}, {}, IUsersAction>) => {
  dispatch(ACTIONS.LOGIN_REQUEST());
  const refreshToken = TokenHandler.getRefreshToken();
  if (!refreshToken) return dispatch(ACTIONS.LOGOUT());
  try {
    const response = await reAuth(refreshToken);
    dispatch(ACTIONS.LOGIN_SUCCESS(response));
  } catch (err) {
    dispatch(ACTIONS.LOGIN_FAIL(err));
  }
};
