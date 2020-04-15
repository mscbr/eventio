import { EUserActionTypes, IUserState } from './types';
import { TUserReducerActions } from './actions';

const initState = {
  user: undefined,
  loading: false,
  error: null,
};

const userReducer = (
  state: IUserState = initState,
  action: TUserReducerActions
): IUserState => {
  switch (action.type) {
    case EUserActionTypes.LOGIN_REQUEST:
      return {
        user: undefined,
        loading: true,
        error: null,
      };
    case EUserActionTypes.LOGIN_SUCCESS:
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case EUserActionTypes.LOGIN_FAIL:
      return {
        user: undefined,
        loading: false,
        error: action.payload,
      };
    case EUserActionTypes.LOGOUT:
      return initState;
    default:
      return state;
  }
};

export default userReducer;
