/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        myred:{
          100: '#ec407a',
          200: '#e91e63',
          300: '#d81b60',
          400: '#c2185b',
          500: '#ad1457',
          600: '#880e4f',
        }
      }
    },
  },
  plugins: [],
}