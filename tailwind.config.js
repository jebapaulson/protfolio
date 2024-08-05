/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    borderColor:{
      "primary":"rgb(114, 4, 117)",
      "secondary":"rgb(72, 6, 75)"
    },
    fontFamily:{
      "name-font":"Sriracha"
    }
  },
  plugins: [],
}

