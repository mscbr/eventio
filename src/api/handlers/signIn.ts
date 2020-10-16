import axiosEventio from 'api/axios';
import endpoints from 'api/endpoints';
import TokenHandler from 'localStorage/tokenHandler';

export const signIn = async (username: string, password: string) => {
  TokenHandler.clearToken();
  TokenHandler.clearRefreshToken();
  const url = endpoints.auth;
  try {
    const { data } = await axiosEventio.post(url, {
      email: username,
      password,
    });
    return data;
  } catch (error) {
    throw error;
  }
};
