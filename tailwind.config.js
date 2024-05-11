/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        'brown': '#3E3232',
        'b2': '#B89C9C',
        'b3': '#7E6363',
      },
      backgroundImage: {
        'mobile': "url('/src/img/mobile.png')",
        'laptop': "url('/src/img/homebg.png')",
      }
    },
  },
  plugins: [],
}

