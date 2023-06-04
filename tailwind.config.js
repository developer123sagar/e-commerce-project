/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary:{700:'#0f766e'},
        secondary:{400:'#fbbf24'},
        // tertiary:{400:'#f7f7f7'},
      },
      fontFamily:{
        'roboto':['Roboto', 'sans-serif'],
        'cursive':['Great Vibes', 'sans-serif'],
        'poppins':['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

