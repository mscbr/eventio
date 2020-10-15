import { createReducer } from 'store/helpers';
import { EUserActionTypes, IAuthState, TReducers } from './types';

const initState = {
  user: undefined,
  loading: false,
  error: null,
};

const reducers: TReducers = {
  [EUserActionTypes.LOGIN_REQUEST]: () => ({
    loading: true,
    error: null,
    user: undefined,
  }),
  [EUserActionTypes.LOGIN_SUCCESS]: (_, { payload: { user } }) => ({
    user,
    loading: false,
    error: null,
  }),
  [EUserActionTypes.LOGIN_FAIL]: (_, { payload: { error } }) => ({
    user: null,
    loading: false,
    error,
  }),
  [EUserActionTypes.LOGOUT]: () => initState,
};
export default createReducer<IAuthState>(initState, reducers);
