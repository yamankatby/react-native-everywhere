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
              color: '#3992FF',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
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
