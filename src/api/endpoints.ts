export default {
  auth: '/auth/native',
  events: '/events',
  eventAttend: (id: string) => `/events/${id}/attendees/me`,
};
