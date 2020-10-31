export const SET_SERVER_ERROR = 'SET_SERVER_ERROR';

export interface IServerErrorState {
  isError: boolean;
  status?: number | null;
  statusText?: string;
}

export interface IServerErrorAction {
  type: typeof SET_SERVER_ERROR;
  payload: IServerErrorState;
}

export type TReducers = {
  [key: string]: (
    state: IServerErrorState,
    action: IServerErrorAction
  ) => IServerErrorState;
};
