import { createStore, combineReducers, applyMiddleware, Action } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import userReducer from './auth/reducer';
import eventsReducer from './events/reducer';
import serverErrorReducer from './serverError/reducer';

export const rootReducer = combineReducers({
  userReducer,
  eventsReducer,
  serverErrorReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    // additional typing (as) is implemented in order
    // to be able to send thunk actions from axios interceptors
    /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
    applyMiddleware(thunk as ThunkMiddleware<any, Action<any>>)
  )
);

export default rootReducer;
