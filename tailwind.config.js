/** @type {import('tailwindcss').Config} */
export const content = ['./index.html', './src/**/*.{js,ts,jsx,tsx}'];
export const theme = {
  extend: {
    fontFamily: {
      marvel: ['"Marvel"', 'sans-serif'],
    },
    colors: {
      'primary-color': '#f04037',
      'secondary-color': '#fefefe',
      'title-color': '#e4b637',
    },
  },
};
export const plugins = [];
