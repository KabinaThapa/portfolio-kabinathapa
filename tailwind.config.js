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

      },
      colors:{
        gun:'#2D3A3A',
        violet:'#49475B',
        jet:'#39393A',
        space:'#2A2D43',
        mount:'#1E1F1F',
        silver:'#B6B9B9'

      }
      
    },
  },
  plugins: [],
}

 