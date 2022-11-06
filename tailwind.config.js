/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        main: '#8d0020',
        dark: '#1f0000',
        light: '#faecef',
      },
      fontFamily: {
        first: ['Ailerons', 'sans-serif'],
        second: ['Phage Rough', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
