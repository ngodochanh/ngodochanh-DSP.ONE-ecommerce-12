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
      screens: {
        '3xl': '1920px',
      },
      width: {
        'clamp-14': 'clamp(12px, 1.3vw, 14px)',
        'clamp-15': 'clamp(13px, 1.5vw, 15px)',
        'clamp-18': 'clamp(16px, 1.8vw, 18px)',
        'clamp-20': 'clamp(16px, 1.9vw, 20px)',
        'clamp-24': 'clamp(18px, 1.7vw, 24px)',
        'clamp-35': 'clamp(30px, 3vw, 35px)',
        'clamp-50': 'clamp(44px, 6vw, 50px)',
        'clamp-80': 'clamp(64px, 5vw, 80px)',
        'clamp-150': 'clamp(100px, 10vw, 150px)',
      },
      height: {
        'clamp-14': 'clamp(12px, 1.3vw, 14px)',
        'clamp-15': 'clamp(13px, 1.5vw, 15px)',
        'clamp-18': 'clamp(16px, 1.8vw, 18px)',
        'clamp-20': 'clamp(16px, 1.9vw, 20px)',
        'clamp-24': 'clamp(18px, 1.7vw, 24px)',
        'clamp-35': 'clamp(30px, 3vw, 35px)',
        'clamp-50': 'clamp(44px, 6vw, 50px)',
        'clamp-80': 'clamp(64px, 5vw, 80px)',
        'clamp-150': 'clamp(100px, 10vw, 150px)',
      },
      fontSize: {
        'clamp-12': 'clamp(10px, 1.2vw, 12px)',
        'clamp-14': 'clamp(12px, 1.3vw, 14px)',
        'clamp-15': 'clamp(12px, 1.4vw, 15px)',
        'clamp-16': 'clamp(14px, 1.6vw, 16px)',
        'clamp-18': 'clamp(16px, 1.8vw, 18px)',
        'clamp-20': 'clamp(16px, 1.9vw, 20px)',
        'clamp-22': 'clamp(18px, 2vw, 22px)',
        'clamp-24': 'clamp(18px, 1.7vw, 24px)',
        'clamp-28': 'clamp(20px, 1.9vw, 28px)',
        'clamp-40': 'clamp(36px, 4.5vw, 40px)',
        'clamp-42': 'clamp(38px, 4.5vw, 42px)',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(317px, 1fr))',
      },
      colors: {
        // White
        'white-25': '#FFFFFF40',
        // Blue
        'blue-strong': '#1070B6',
        // Orange
        'orange-bright': '#F8991C',
        // Yellow
        'yellow-bright': '#EDCB1B',
        // Gray
        'gray-lightest': '#F6F6F6',
        'gray-light': '#807D7E',
        'gray-medium': '#7F7F7F',
        'gray-darker': '#5F5F5F',
        'gray-dark': '#797979',
        'gray-deep': '#2A2F2F',
        'gray-deepest': '#1B1D21',
        // Black
        'black-dark': '#080808',
        'black-90': '#000000e6',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui({ layout: {} })],
};
export default config;
