import axiosEventio from 'api/axios';
import endpoints from 'api/endpoints';

export const getEvent = async (id: string) => {
  const url = endpoints.eventDetail(id);
  try {
    const response = await axiosEventio.get(url);
    return response;
  } catch (error) {
    throw error;
  }
};
