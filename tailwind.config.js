const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
const SCROLL_MARGIN_VALUES = [1, 2]

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        'up-down': {
          '0%, 100%': {
            transform: 'translate(1.5rem, 1.5rem)'
          },
          '50%': {
            transform: 'translate(0rem, 0rem)'
          }
        }
      },
      animation: {
        'up-down': 'up-down 3s ease-in-out'
      },
      maxWidth: {
        '3xs': '12rem'
      },
      height: {
        112: '32rem',
        120: '34rem',
        128: '36rem',
        134: '38rem'
      },
      backgroundSize: {
        full: '100% 100%'
      },
      scale: {
        120: '1.2'
      }
    },
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
      const backgroundUtilities = {
        '.background-none': {
          background: 'none'
        }
      }
      const textShadowUtilities = {
        '.border-text-white': {
          'text-shadow': '0 0 2px white, 0 0 2px white, 0 0 2px white, 0 0 2px white'
        }
      }
      const scrollMarginUtilities = SCROLL_MARGIN_VALUES.reduce((acc, current) => {
        acc[`.scroll-mt-${current * 4}`] = {
          'scroll-margin-top': `${current}rem`
        }
        return acc
      }, {})
      addUtilities({ ...backgroundUtilities, ...textShadowUtilities })
      addUtilities(scrollMarginUtilities, {
        variants: ['responsive']
      })
    })
  ]
}
