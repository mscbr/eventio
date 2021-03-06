import axiosEventio from 'api/axios';
import endpoints from 'api/endpoints';

export const unattendEvent = async (eventId: string) => {
  const url = endpoints.eventAttend(eventId);
  try {
    const { data } = await axiosEventio.delete(url);
    return data;
  } catch (error) {
    throw error;
  }
};
