import axiosEventio from 'api/axios';
import endpoints from 'api/endpoints';

interface Payload {
  startsAt?: string;
  title?: string;
  description?: string;
  capacity?: number;
}

// * implement lodash to clearout payload

export const updateEvent = async (id: string, payload: Payload) => {
  const url = endpoints.eventDetail(id);
  try {
    const response = await axiosEventio.patch(url);
    return response;
  } catch (error) {
    throw error;
  }
};
