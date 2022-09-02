/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'primary':'#FAB415',
      'secondary':'#1B1855',
      'white':'#FFFFFF',
      'gray': '#FAFAFA'
      
  },
  backgroundImage:{
    'ustp-logo': "url('/img/edited.png')",
    'ustp-blue': "url('/img/bg.png')"
  },

    extend: {
      
    },
  },
  plugins: [],
}
