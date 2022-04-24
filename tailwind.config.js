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
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
