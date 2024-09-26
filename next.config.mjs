import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.yodycdn.com',
        port: '',
        pathname: '/fit-in/**',
      },
    ],
  },
  env: {
    HOME: '/',
    ABOUT: '/about',
    PRODUCTS: '/products',
    BLOGS: '/blogs',
    POLICY: '/policy',
    CONTACT: '/contact',
    CART: '/cart',
    LOGIN: '/login',
    REGISTER: '/register',
    PROFILE: '/profile',
  },
};

export default withNextIntl(nextConfig);
