/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto:['Roboto', 'sans-serif'],
        opensans:['Open Sans', 'sans-serif'],
        robotoc:['Roboto Condensed', 'sans-serif']

      }
    },
  },
  plugins: [],
}

