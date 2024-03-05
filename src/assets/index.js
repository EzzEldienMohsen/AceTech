import { nanoid } from 'nanoid';

export const logo =
  'https://acetechmarketing.com/wp-content/uploads/2023/02/golden-logo-for-site--91x91.png';
export const pages = [
  { id: nanoid(), title: 'Home', to: '/' },
  { id: nanoid(), title: 'about us', to: '/about' },
  { id: nanoid(), title: 'services', to: '/services' },
  { id: nanoid(), title: 'contact us', to: '/contact' },
];
