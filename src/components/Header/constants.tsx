import config from '@/config';

const NAVIGATION_LIST = [
  {
    id: 'home',
    label: 'Home',
    path: config.routes.home,
  },
  {
    id: 'about',
    label: 'About',
    path: config.routes.about,
  },
  {
    id: 'product',
    label: 'Product',
    path: config.routes.product,
  },
  {
    id: 'blogs',
    label: 'Blogs',
    path: config.routes.blogs,
  },
  {
    id: 'policy',
    label: 'Policy',
    path: config.routes.policy,
  },
  {
    id: 'contact',
    label: 'Contact',
    path: config.routes.contact,
  },
];

export { NAVIGATION_LIST };
