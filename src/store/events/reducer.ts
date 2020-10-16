import { createReducer } from 'store/helpers';
import { EEventActionTypes, IEventsState, TReducers } from './types';

const initState = {
  events: undefined,
  isFetching: false,
  error: null,
  attendLoading: false,
};

const reducers: TReducers = {
  [EEventActionTypes.EVENTS_FETCH_REQUEST]: () => ({ isFetching: true }),
  [EEventActionTypes.EVENTS_FETCH_SUCCESS]: (_, { payload: { events } }) => ({
    events,
    isFetching: false,
    error: null,
  }),
  [EEventActionTypes.EVENTS_FETCH_FAIL]: (_, { payload: { error } }) => ({
    events: null,
    isFetching: false,
    error,
  }),
};

export default createReducer<IEventsState>(initState, reducers);
