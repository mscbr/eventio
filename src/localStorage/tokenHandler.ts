const ACCESS_TOKEN = 'accessToken';
const REFRESH_TOKEN = 'refreshToken';

class TokenHandler {
  // ACCESS_TOKEN
  static setToken = (token: string) => {
    localStorage.setItem(ACCESS_TOKEN, token);
  };

  static hasToken = () => !!localStorage.getItem(ACCESS_TOKEN);

  static getToken = () => localStorage.getItem(ACCESS_TOKEN);

  static clearToken = () => {
    localStorage.removeItem(ACCESS_TOKEN);
  };

  // REFRESH_TOKEN
  static setRefreshToken = (token: string) => {
    localStorage.setItem(REFRESH_TOKEN, token);
  };

  static hasRefreshToken = () => !!localStorage.getItem(REFRESH_TOKEN);

  static getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN);

  static clearRefreshToken = () => {
    localStorage.removeItem(REFRESH_TOKEN);
  };
}

export default TokenHandler;
