import axiosEventio from 'api/axios';
import endpoints from 'api/endpoints';

export const getEvents = async () => {
  const url = endpoints.events;
  try {
    // full response is returned
    // in order to read pagination
    // params in the future
    const response = await axiosEventio.get(url);
    return response;
  } catch (error) {
    throw error;
  }
};
