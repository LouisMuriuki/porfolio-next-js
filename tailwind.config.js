/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'] ,
        'fuzzy-bubbles':['Fuzzy Bubbles','sans-serif'],
        'poppins':['Poppins','sans-serif'],
        'kalam':['Kalam','sans-serif'],
      },
    },
  },
  plugins: [],
}
