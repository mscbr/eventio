import { createBrowserHistory } from 'history';

import { store } from 'store';
import { unattendEvent } from 'api/handlers/unattendEvent';
import { attendEvent } from 'api/handlers/attendEvent';
import ACTIONS, { REFETCH_EVENTS } from 'store/events/actions';

const { SET_ATTEND_LOADING } = ACTIONS;

export const setButton = (
  loggedUser: string,
  owner: string,
  attendeesId: string[]
  /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
): [string, string, (id: string) => void] => {
  if (attendeesId.includes(loggedUser)) {
    const handleClick = async (eventId: string) => {
      try {
        await unattendEvent(eventId);
        store.dispatch(REFETCH_EVENTS());
      } catch (error) {
        throw error;
      }
    };
    return ['Leave', 'secondary', handleClick];
  }
  if (loggedUser === owner) {
    const history = createBrowserHistory();
    return ['Edit', 'edit', (id: string) => history.push(`/event/${id}/edit`)];
  }

  const handleClick = async (eventId: string) => {
    try {
      await attendEvent(eventId);
      store.dispatch(REFETCH_EVENTS());
    } catch (error) {
      throw error;
    }
  };
  return ['Join', '', handleClick];
};

export const isExpired = (date: string) => {
  return !(new Date(date) > new Date(Date.now()));
};
