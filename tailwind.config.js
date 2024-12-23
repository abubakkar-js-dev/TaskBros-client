/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: '#4A90E2',
        secondary: '#E67E22',
        lightgray: '#ECF0F1',
        darkgray: '#34495E',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

