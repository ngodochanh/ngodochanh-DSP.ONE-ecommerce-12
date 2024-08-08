import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    HOME: '/',
    ABOUT: 'about',
    PRODUCT: 'product',
    BLOGS: 'blogs',
    POLICY: 'policy',
    CONTACT: 'contact',
  },
};

export default withNextIntl(nextConfig);
