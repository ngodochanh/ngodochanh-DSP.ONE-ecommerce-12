import type { Config } from 'tailwindcss';
const { nextui } = require('@nextui-org/react');

const config: Config = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(317px, 1fr))',
      },
      colors: {
        // Orange
        'orange-bright': '#F8991C',
        // Gray
        'gray-lightest': '#F6F6F6',
        'gray-light': '#807D7E',
        'gray-medium': '#7F7F7F',
        'gray-darker': '#5F5F5F',
        'gray-dark': '#797979',
        // Black
        'black-dark': '#080808',
        'black-90': '#000000e6',
        'gray-deep': '#2A2F2F',
        'gray-deepest': '#1B1D21',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;
