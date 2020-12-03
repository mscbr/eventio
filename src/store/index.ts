// @ts-nocheck
import {
  createStore,
  combineReducers,
  applyMiddleware,
  Action,
  Reducer,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import userReducer from './auth/reducer';
import eventsReducer from './events/reducer';
import serverErrorReducer from './serverError/reducer';

const staticReducers = {
  userReducer,
  eventsReducer,
  serverErrorReducer,
};

export default function configureStore(initState) {
  const store = createStore(
    createReducer(),
    initState,
    composeWithDevTools(
      // additional typing (as) is implemented in order
      // to be able to send thunk actions from axios interceptors
      /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
      applyMiddleware(thunk as ThunkMiddleware<any, Action<any>>)
    )
  );

  store.asyncReducers = {};

  store.injectReducer = (key: string, asyncReducer: Reducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  store.removeReducer = (key: string) => {
    delete store.asyncReducers[key];
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  return store;
}

function createReducer(asyncReducers) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
}

export type AppState = ReturnType<typeof staticReducers>;
export const store = configureStore();
