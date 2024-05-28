/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'maven-pro': ['Maven Pro', 'sans-serif'],
        'comfortaa': ['Comfortaa', 'cursive'],
        'roboto': ['Roboto', 'sans-serif'],
      }
    }
  },
  variants: {},
  plugins: [],
}
