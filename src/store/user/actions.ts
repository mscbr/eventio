import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { signIn } from 'api/auth/signIn';
import AccessTokenHandler from 'localStorage/accessTokenHandler';
import RefreshTokenHandler from 'localStorage/refreshTokenHandler';

import { ReduxBaseAction } from 'types/store';
import { EUserActionTypes, IUser, IUserState } from './types';

interface ILoginRequest extends ReduxBaseAction {
  type: EUserActionTypes.LOGIN_REQUEST;
}
interface ILoginSuccess extends ReduxBaseAction {
  type: EUserActionTypes.LOGIN_SUCCESS;
  payload: IUser;
}
interface ILoginFail extends ReduxBaseAction {
  type: EUserActionTypes.LOGIN_FAIL;
  payload: object | null;
}
interface ILogout extends ReduxBaseAction {
  type: EUserActionTypes.LOGOUT;
}

export type TUserReducerActions =
  | ILoginRequest
  | ILoginSuccess
  | ILoginFail
  | ILogout;

export const loginRequest = (): ILoginRequest => {
  return {
    type: EUserActionTypes.LOGIN_REQUEST,
  };
};

export const logout = (): ILogout => {
  AccessTokenHandler.clearToken();
  RefreshTokenHandler.clearToken();
  return {
    type: EUserActionTypes.LOGOUT,
  };
};

export const loginSuccess = (user: IUser): ILoginSuccess => {
  return {
    type: EUserActionTypes.LOGIN_SUCCESS,
    payload: user,
  };
};
const loginFail = (err: object | null): ILoginFail => {
  return {
    type: EUserActionTypes.LOGIN_FAIL,
    payload: err,
  };
};

export const login = (
  email: string,
  password: string
): ThunkAction<void, IUserState, undefined, TUserReducerActions> => async (
  dispatch: ThunkDispatch<{}, {}, TUserReducerActions>
) => {
  dispatch(loginRequest());
  try {
    const response = await signIn(email, password);
    dispatch(loginSuccess(response.user));
  } catch (err) {
    dispatch(loginFail(err));
  }
};
