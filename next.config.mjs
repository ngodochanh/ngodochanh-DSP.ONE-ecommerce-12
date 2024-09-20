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
    PRODUCT: '/product',
    BLOGS: '/blogs',
    POLICY: '/policy',
    CONTACT: '/contact',
    CART: '/cart',
    LOGIN: '/login',
    REGISTER: '/register',
  },
};

export default withNextIntl(nextConfig);
