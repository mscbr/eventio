import { IUser } from 'store/auth/types';

export interface IEventList {
  id: string;
  title: string;
  description: string;
  startsAt: string;
  capacity: number;
  owner: IUser;
  attendees: IUser[];
  createdAt: string;
  updatedAt: string;
}

export type ViewType = 'list' | 'grid';

export enum EFilterTypes {
  all = 'All Events',
  future = 'Future Events',
  past = 'Past Events',
}
