export default {
  auth: '/users/login',
  events: '/events',
  eventDetail: (id: string) => `/events/${id}`,
  eventAttend: (id: string) => `/events/${id}/attendees/me`,
};
