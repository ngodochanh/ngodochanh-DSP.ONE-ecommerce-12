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
      animation: {
        'rotate-180': 'rotateDown 0.3s forwards',
        'rotate-0': 'rotateUp 0.3s forwards',
      },
      keyframes: {
        rotateDown: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(180deg)',
          },
        },
        rotateUp: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(180deg)',
          },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;
