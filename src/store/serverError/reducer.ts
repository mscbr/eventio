import { createReducer } from 'store/helpers';
import { IServerErrorState, SET_SERVER_ERROR, TReducers } from './types';

const initState = {
  isError: false,
  status: null,
  statusText: '',
};

const reducers: TReducers = {
  [SET_SERVER_ERROR]: (_, { payload: { isError, status, statusText } }) => ({
    isError,
    status,
    statusText,
  }),
};

export default createReducer<IServerErrorState>(initState, reducers);
