/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 'DarkModeRed': '#240046',
        // 'DarkModeWhite': '#F2F2F2',
        // 'DarkModeDarkGrey': '#240046',
        // 'DarkModeGrey': '#3c096c',
        // 'DarkModeDarkGrey-50': '#240046',
        // 'DarkModeGreen': '#ff9100',
        'DarkModeRed': '#C11428',
        'DarkModeWhite': '#F2F2F2',
        'DarkModeGrey': '#595959',
        'DarkModeDarkGrey': '#262626',
        'DarkModeDarkGrey-50': 'rgba(38, 38, 38, .5)',
        'DarkModeGreen': '#3A8F7D',

        'LightModeWhite': '#EDEEF2',
        'LightModeWhite-50': 'rgba(237, 238, 242, .5)',
        'LightModeRed': '#BF0404',
        'LightModePrimaryBlue': '#215BA6',
        'LightModeSecondaryBlue': '#23A5D9',
        'LightModeTertiaryBlue': '#05DBF2'
      }
    },
    fontFamily: {
      sans: ['Ubuntu', 'sans-serif'],
    }
  },
  plugins: [],
}