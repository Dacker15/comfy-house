const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: {
        light: '#D3A15F',
        DEFAULT: '#C08435',
        dark: '#A06E2C'
      },
      secondary: {
        light: '#F1ECE4',
        DEFAULT: '#D9CAB3',
        dark: '#C1A985'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
