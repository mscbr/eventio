import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { getEvents } from 'api/handlers/getEvents';
import { prepareActions } from 'store/helpers';
import { EEventActionTypes, IEventsState, IEventsAction } from './types';

const ACTIONS_DATA = [
  [EEventActionTypes.EVENTS_FETCH_REQUEST],
  [EEventActionTypes.EVENTS_FETCH_SUCCESS, 'events'],
  [EEventActionTypes.EVENTS_FETCH_FAIL, 'error'],
];

const ACTIONS = prepareActions(ACTIONS_DATA);
export default ACTIONS;

export const FETCH_EVENTS = (): ThunkAction<
  void,
  IEventsState,
  undefined,
  IEventsAction
> => async (dispatch: ThunkDispatch<{}, {}, IEventsAction>) => {
  dispatch(ACTIONS[EEventActionTypes.EVENTS_FETCH_REQUEST]());
  try {
    const { data } = await getEvents();
    dispatch(ACTIONS[EEventActionTypes.EVENTS_FETCH_SUCCESS](data));
  } catch (err) {
    dispatch(ACTIONS[EEventActionTypes.EVENTS_FETCH_FAIL](err));
  }
};

export const REFETCH_EVENTS = (): ThunkAction<
  void,
  IEventsState,
  undefined,
  IEventsAction
> => async (dispatch: ThunkDispatch<{}, {}, IEventsAction>) => {
  try {
    const { data } = await getEvents();
    dispatch(ACTIONS[EEventActionTypes.EVENTS_FETCH_SUCCESS](data));
  } catch (err) {
    dispatch(ACTIONS[EEventActionTypes.EVENTS_FETCH_FAIL](err));
  }
};
