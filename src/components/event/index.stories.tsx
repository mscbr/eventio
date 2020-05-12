import React, { useState } from 'react';
import styled from 'styled-components';

import { ViewType } from 'types/event';
import ViewSwitch from 'components/viewSwitch';
import EventComponent from './index';

export default { title: 'Molecules' };

const StyledWrapper = styled.div`
  width: 92%;
  margin: 0 20px;
  & > div {
    margin-top: 20px;
  }
`;

const listEvents = [
  {
    // _id: '5e4be7f9df7691001f543472',
    updatedAt: '2020-02-18T13:34:49.265Z',
    createdAt: '2020-02-18T13:34:49.265Z',
    title: 'Loki wanted',
    description:
      "Hey, my brother is still on the run! Can you guys help me, please? Let's meet and plan how to catch him.",
    startsAt: '2020-03-14T05:36:44.902Z',
    capacity: 10,
    owner: {
      // _id: '5e4be7f9df7691001f54346d',
      firstName: 'Thor',
      lastName: 'Odinson',
      email: 'thor@strv.com',
      // __v: 0,
      id: '5e4be7f9df7691001f54346d',
    },
    // __v: 0,
    attendees: [
      {
        // _id: '5e4be7f9df7691001f54346c',
        firstName: 'Natasha',
        lastName: 'Romanova',
        email: 'blackwidow@strv.com',
        // __v: 0,
        id: '5e4be7f9df7691001f54346c',
      },
      {
        // _id: '5e4be7f9df7691001f54346b',
        firstName: 'Bruce',
        lastName: 'Banner',
        email: 'brucebanner@strv.com',
        // __v: 0,
        id: '5e4be7f9df7691001f54346b',
      },
      {
        // _id: '5e4be7f9df7691001f54346f',
        firstName: 'Steven',
        lastName: 'Rogers',
        email: 'steverogers@strv.com',
        // __v: 0,
        id: '5e4be7f9df7691001f54346f',
      },
      {
        // _id: '5e4be7f9df7691001f543470',
        firstName: 'James',
        lastName: 'Barnes',
        email: 'buckybarnes@strv.com',
        // __v: 0,
        id: '5e4be7f9df7691001f543470',
      },
      {
        // _id: '5e4be7f9df7691001f543471',
        firstName: 'Anthony',
        lastName: 'Stark',
        email: 'tonystark@strv.com',
        // __v: 0,
        id: '5e4be7f9df7691001f543471',
      },
    ],
    id: '5e4be7f9df7691001f543472',
  },
  {
    // _id: '5e4be7f9df7691001f543473',
    updatedAt: '2020-02-18T13:34:49.266Z',
    createdAt: '2020-02-18T13:34:49.266Z',
    title: 'Teambuilding at Central Park',
    description:
      "Hello friends, it's time to have some fun together in NYC again.",
    startsAt: '2020-03-29T05:36:44.904Z',
    capacity: 10,
    owner: {
      // _id: '5e4be7f9df7691001f54346f',
      firstName: 'Steven',
      lastName: 'Rogers',
      email: 'steverogers@strv.com',
      // __v: 0,
      id: '5e4be7f9df7691001f54346f',
    },
    // __v: 0,
    attendees: [
      {
        // _id: '5e4be7f9df7691001f54346c',
        firstName: 'Natasha',
        lastName: 'Romanova',
        email: 'blackwidow@strv.com',
        // __v: 0,
        id: '5e4be7f9df7691001f54346c',
      },
      {
        // _id: '5e4be7f9df7691001f54346b',
        firstName: 'Bruce',
        lastName: 'Banner',
        email: 'brucebanner@strv.com',
        // __v: 0,
        id: '5e4be7f9df7691001f54346b',
      },
      {
        // _id: '5e4be7f9df7691001f54346d',
        firstName: 'Thor',
        lastName: 'Odinson',
        email: 'thor@strv.com',
        // __v: 0,
        id: '5e4be7f9df7691001f54346d',
      },
      {
        // _id: '5e4be7f9df7691001f543471',
        firstName: 'Anthony',
        lastName: 'Stark',
        email: 'tonystark@strv.com',
        // __v: 0,
        id: '5e4be7f9df7691001f543471',
      },
    ],
    id: '5e4be7f9df7691001f543473',
  },
  {
    // _id: '5e4be7f9df7691001f543474',
    updatedAt: '2020-02-18T13:34:49.267Z',
    createdAt: '2020-02-18T13:34:49.267Z',
    title: 'IoT Workshop',
    description:
      'Are you interested in my toys? Come to my Tower for a workshop how to develop a smart suit.',
    startsAt: '2020-04-08T05:36:44.905Z',
    capacity: 10,
    owner: {
      // _id: '5e4be7f9df7691001f543471',
      firstName: 'Anthony',
      lastName: 'Stark',
      email: 'tonystark@strv.com',
      // __v: 0,
      id: '5e4be7f9df7691001f543471',
    },
    // __v: 0,
    attendees: [
      {
        // _id: '5e4be7f9df7691001f54346b',
        firstName: 'Bruce',
        lastName: 'Banner',
        email: 'brucebanner@strv.com',
        // __v: 0,
        id: '5e4be7f9df7691001f54346b',
      },
    ],
    id: '5e4be7f9df7691001f543474',
  },
];

export const Events = () => {
  const [view, setView] = useState<ViewType>('grid');
  return (
    <StyledWrapper>
      <ViewSwitch viewType={view} onChange={setView} />
      {listEvents.map(event => (
        <EventComponent key={event.id} event={event} viewType={view} />
      ))}
    </StyledWrapper>
  );
};
