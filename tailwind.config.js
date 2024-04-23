/** @type {import('tailwindcss').Config} */
export default {
  plugins: [
    require('flowbite/plugin')
  ],
  content: [
    "./node_modules/flowbite/**/*.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'darkBlue': '#3D3B8E',
        'blue': '#6883BA',
        'white': '#F9F9F9',
        'pink': '#E072A4',
        'lightGrey': '#8C8C8C'
      },
      width: {
        '32r': '32rem',
        '38r': '38rem'
      },
      margin: {
        '12r': '12rem'
      },
      height: {
        '32r': '32rem',
      },
      screens: {
        '440': '440px',
        '510': '510px',
        '640': '640px',
        '780': '780px',
        '1100': '1100px',
        '2400': '2400px'
      },
      backgroundImage: {
        'firstSectionBg': "url('/src/assets/first-sect-bg.png')"
      },
      translate: {
        'm6': '-6px'
      }
    },
  }
}