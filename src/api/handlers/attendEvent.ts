import axiosEventio from 'api/axios';
import endpoints from 'api/endpoints';

export const attendEvent = async (eventId: string) => {
  const url = endpoints.eventAttend(eventId);
  try {
    const { data } = await axiosEventio.post(url);
    return data;
  } catch (error) {
    throw error;
  }
};
