export interface User {
  name: string;
  email: string;
  phone: string;
  categories: string[];
  channels: string[];
}

export const users: User[] = [
  {
    name: 'user1',
    email: 'user1@email.com',
    phone: '1234567890',
    categories: ['sports', 'movies'],
    channels: ['sms', 'email'],
  },
  {
    name: 'user2',
    email: 'user2@email.com',
    phone: '1234567890',
    categories: ['sports', 'finance'],
    channels: ['push', 'sms'],
  },
  {
    name: 'user3',
    email: 'user3@email.com',
    phone: '1234567890',
    categories: ['finance'],
    channels: ['sms', 'email', 'push'],
  },
];
