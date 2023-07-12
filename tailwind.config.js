/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spotify-green': '#1ED760',
        'spotify-black': '#202020',
        'spotify-grey': '#404040'
      }
    },
  },
  plugins: [],
}