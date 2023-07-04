/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-blue': '#040067',
        'menu-txt': '#DADAE6'
      },
      fontFamily: {
        'Mont': ['Montserrat'],
        'Shaimus': ['Shaimus Clean Regular'],
      },
    },
  },
  plugins: [],
}