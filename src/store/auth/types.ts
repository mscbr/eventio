import { IUser } from 'types/user';

export enum EUserActionTypes {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAIL = 'LOGIN_FAIL',
  LOGOUT = 'LOGOUT',
}

export interface IAuthState {
  user?: IUser | null;
  loading?: boolean;
  error?: object | null;
}

export interface IUsersAction {
  type: EUserActionTypes;
  payload: IAuthState;
}

export type TReducers = {
  [key: string]: (state: IAuthState, action: IUsersAction) => IAuthState;
};
