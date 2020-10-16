import axiosEventio from 'api/axios';
import endpoints from 'api/endpoints';

export const getEvents = async () => {
  const url = endpoints.events;
  try {
    const response = await axiosEventio.get(url);
    return response;
  } catch (error) {
    throw error;
  }
};
