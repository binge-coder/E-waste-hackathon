/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#004643', //this is for light mode
          // dark: '#0e7490'
        },
        'secondary': {
          DEFAULT: '#abd1c6'
        },
        'tertiary': {
          DEFAULT: '#e16162'
        },
        'stroke': { // this is used for text
          heading: '#fffffe',
          light: '#e8e4e6',
          dark: '#001e1d'
        },
        'highlight': {
          DEFAULT: '#f9bc60'
        }
      },
      fontFamily: {
        alpha: 'Rubik'
      }
    },
  },
  plugins: [],
}

// refer to this for coloring inspiration: https://www.happyhues.co/palettes/10