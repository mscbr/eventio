import config from 'config';
import endpoints from 'api/endpoints';
import AccessTokenHandler from 'localStorage/accessTokenHandler';
import RefreshTokenHandler from 'localStorage/refreshTokenHandler';

export const reAuth = async () => {
  const url = `${config.apiUrl}${endpoints.auth}`;
  const accessToken = AccessTokenHandler.getToken();
  const refreshToken = RefreshTokenHandler.getToken();

  if (!refreshToken) {
    throw new Error('Unexpected error');
  }

  const response = await fetch(`${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      APIKey: `${config.APIKey}`,
      Authorization: `${accessToken}`,
    },
    body: JSON.stringify({
      refreshToken,
    }),
  });

  switch (response.status) {
    case 200: {
      const strResp = await response.json();
      const { id, firstName, lastName, email, createdAt, updatedAt } = strResp;

      const newAccessToken = response.headers.get('authorization');
      AccessTokenHandler.setToken(newAccessToken || '');

      return {
        user: { id, firstName, lastName, email, createdAt, updatedAt },
      };
    }
    default:
      throw new Error('Unexpected error');
  }
};
