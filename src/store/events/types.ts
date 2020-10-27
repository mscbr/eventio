import { IEvent } from 'types/event';

export enum EEventActionTypes {
  EVENTS_FETCH_REQUEST = 'EVENTS_REQUEST',
  EVENTS_FETCH_SUCCESS = 'EVENTS_FETCH_SUCCESS',
  EVENTS_FETCH_FAIL = 'EVENTS_FETCH_FAIL',
  EVENTS_RESPONSE_UPDATE = 'EVENTS_RESPONSE_UPDATE',
}

export interface IEventsState {
  events?: IEvent[] | null;
  isFetching?: boolean;
  error?: object | null;
}

export interface IEventsAction {
  type: EEventActionTypes;
  payload: IEventsState;
}

export type TReducers = {
  [key: string]: (state: IEventsState, action: IEventsAction) => IEventsState;
};
