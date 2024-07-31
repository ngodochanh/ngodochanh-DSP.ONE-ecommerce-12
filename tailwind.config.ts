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
      colors: {
        // Orange
        'orange-bright': '#F8991C',
        // Gray
        'gray-light': '#F6F6F6', // Xám rất nhạt
        'gray-soft': '#807D7E', // Xám nhạt
        'gray-medium': '#7F7F7F', // Xám trung bình
        'gray-dark': '#5F5F5F', // Xám tối hơn
        'gray-deep': '#797979', // Xám đậm
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;
