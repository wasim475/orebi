/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        DM : ['DM Sans', 'sans-serif'],
      },
      colors: {
        fontC: '#767676',
        bgC: '#F5F5F3'
      }
    },
  },
  plugins: [],
}