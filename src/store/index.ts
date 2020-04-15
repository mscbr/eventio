import { createStore, combineReducers } from 'redux';
import userReducer from './user/reducer';

const rootReducer = combineReducers({
  userReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);

export default rootReducer;
