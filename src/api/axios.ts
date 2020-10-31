import axios from 'axios';
import config from 'config';
import { store } from 'store';
import { REFRESH_TOKEN_AUTH, LOGOUT } from 'store/auth/actions';
import SERVER_ACTIONS from 'store/serverError/actions';
import TokenHandler from 'localStorage/tokenHandler';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    APIKey: config.APIKey,
  },
  baseURL: config.apiUrl,
  transformRequest: [
    (data, headers) => {
      if (!!data && Object.keys(data).includes('refreshToken')) {
        return JSON.stringify(data);
      }
      if (TokenHandler.hasToken() && TokenHandler.hasRefreshToken()) {
        headers.Authorization = `${TokenHandler.getToken()}`;
        headers['Refresh-Token'] = `${TokenHandler.getRefreshToken()}`;
      }
      if (data) {
        return JSON.stringify(data);
      }
    },
  ],
});

instance.interceptors.response.use(
  res => {
    const token = res.headers.authorization;
    const refreshToken = res.headers['refresh-token'];
    if (token) TokenHandler.setToken(token);
    if (refreshToken) TokenHandler.setRefreshToken(refreshToken);
    return res;
  },
  error => {
    switch (error.response.data.error) {
      case 'Auth.InvalidToken':
        store.dispatch(LOGOUT());
        return;
      case 'Candidate.InvalidAPIKey':
        store.dispatch(LOGOUT());
        return;
      case 'User.NotAuthenticated':
        store.dispatch(REFRESH_TOKEN_AUTH());
        return;
      // write the case for error/response status handling
      default:
        store.dispatch(
          SERVER_ACTIONS.SET_SERVER_ERROR(
            true,
            error.response.status,
            error.response.statusText
          )
        );
        return Promise.reject(error);
    }
  }
);

export default instance;
