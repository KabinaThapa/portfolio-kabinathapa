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
        robotoc:['Roboto Condensed', 'sans-serif'],
        poppins:['Poppins', 'sans-serif'],
        p: ['Poppins', 'sans-serif'],

      },
      colors:{
        gun:'#2D3A3A',
        violet:'#49475B',
        jet:'#39393A',
        space:'#2A2D43',
        mount:'#0C1821',
        silver:'#B4CEE4',
        thistle:'#D53B20',
        t:'#FF781F',
        b:'#6D6A75',

      }
      
    },
  },
  plugins: [],
}

 