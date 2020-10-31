import axiosEventio from 'api/axios';
import endpoints from 'api/endpoints';

interface Payload {
  title: string;
  description: string;
  startsAt: string;
  capacity: number;
}

export const postEvent = async (params: Payload) => {
  const url = endpoints.events;
  try {
    const { data } = await axiosEventio.post(url, { ...params });
    return data;
  } catch (error) {
    throw error;
  }
};
