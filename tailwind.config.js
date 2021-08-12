const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: {
        lighter: 'hsl(29, 84%, 70%)',
        light: 'hsl(29, 84%, 55%)',
        DEFAULT: 'hsl(29, 84%, 40%)',
        dark: 'hsl(29, 84%, 25%)'
      },
      secondary: {
        lighter: 'hsl(148, 12%, 60%)',
        light: 'hsl(148, 12%, 45%)',
        DEFAULT: 'hsl(148, 12%, 30%)',
        dark: 'hsl(148, 12%, 15%)'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'focus'],
      borderWidth: ['hover']
    }
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.background-none': {
          background: 'none'
        }
      }
      addUtilities(newUtilities)
    })
  ]
}
