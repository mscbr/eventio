import { EUserActionTypes, IAuthState, TReducers } from 'store/auth/types';
import { createReducer } from 'store/helpers';

const initState = {
  user: {
    id: '5e4be7f9df7691001f54346d',
    firstName: 'x',
    lastName: 'y',
    email: 'test@test.com',
  },
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
