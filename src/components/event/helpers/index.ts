export const setButton = (
  loggedUser: string,
  owner: string,
  atendeesId: string[]
) => {
  if (atendeesId.includes(loggedUser)) {
    return ['Leave', 'secondary'];
  }
  if (loggedUser === owner) {
    return ['Edit', 'edit'];
  }
  return ['Join', ''];
};
