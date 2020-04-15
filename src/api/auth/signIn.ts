import config from 'config';
import endpoints from 'api/endpoints';
import AccessTokenHandler from 'localStorage/accessTokenHandler';
import RefreshTokenHandler from 'localStorage/refreshTokenHandler';

export const signIn = async (username: string, password: string) => {
  const url = `${config.apiUrl}${endpoints.auth}`;
  const response = await fetch(`${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      APIKey: `${config.APIKey}`,
    },
    body: JSON.stringify({
      email: username,
      password,
    }),
  });

  switch (response.status) {
    case 200: {
      const strResp = await response.json();
      const { id, firstName, lastName, email, createdAt, updatedAt } = strResp;

      const accessToken = response.headers.get('authorization');
      const refreshToken = response.headers.get('refresh-token');
      AccessTokenHandler.setToken(accessToken || '');
      RefreshTokenHandler.setToken(refreshToken || '');

      return {
        user: { id, firstName, lastName, email, createdAt, updatedAt },
      };
    }
    case 401:
      throw new Error('Email or password are incorrect');
    default:
      throw new Error('Unexpected error');
  }
};
