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
  plugins: [nextui()],
};
export default config;
