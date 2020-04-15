const ACCESS_TOKEN = 'accessToken';

class AccessTokenHandler {
  static setToken = (token: string) => {
    localStorage.setItem(ACCESS_TOKEN, token);
  };

  static hasToken = () => !!localStorage.getItem(ACCESS_TOKEN);

  static getToken = () => localStorage.getItem(ACCESS_TOKEN);

  static clearToken = () => {
    localStorage.removeItem(ACCESS_TOKEN);
  };
}

export default AccessTokenHandler;
