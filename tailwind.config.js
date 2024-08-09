/** @type {import('tailwindcss').Config} */
export const content = ['./index.html', './src/**/*.{js,ts,jsx,tsx}'];
export const theme = {
  extend: {
    fontFamily: {
      marvel: ['"Marvel"', 'sans-serif'],
    },
    colors: {
      'primary-color': '#ec1d24',
      'secondary-color': '#fefefe',
    },
  },
};
export const plugins = [];
