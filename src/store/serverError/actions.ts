import { prepareActions } from 'store/helpers';
import { SET_SERVER_ERROR } from './types';

const ACTIONS_DATA = [[SET_SERVER_ERROR, 'isError', 'status', 'statusText']];

const ACTIONS = prepareActions(ACTIONS_DATA);
export default ACTIONS;
