const REFRESH_TOKEN = 'refreshToken';

class RefreshTokenHandler {
  static setToken = (token: string) => {
    localStorage.setItem(REFRESH_TOKEN, token);
  };

  static hasToken = () => !!localStorage.getItem(REFRESH_TOKEN);

  static getToken = () => localStorage.getItem(REFRESH_TOKEN);

  static clearToken = () => {
    localStorage.removeItem(REFRESH_TOKEN);
  };
}

export default RefreshTokenHandler;
