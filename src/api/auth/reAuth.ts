import axiosEventio from 'api/axios';
import endpoints from 'api/endpoints';
import config from 'config';

export const reAuth = async (refreshToken: string) => {
  const url = endpoints.auth;
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      APIKey: config.APIKey,
    },
  };

  try {
    const { data } = await axiosEventio.post(
      url,
      {
        refreshToken,
      },
      axiosConfig
    );
    return data;
  } catch (error) {
    throw error;
  }
};
