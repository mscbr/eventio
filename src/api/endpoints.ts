export default {
  auth: '/users/login',
  events: '/events',
  eventAttend: (id: string) => `/events/${id}/attendees/me`,
};
