const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.zinc
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: colors.blue['600'],
              '&:hover': {
                color: colors.blue['700'],
              }
            }
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
