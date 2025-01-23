/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{vue,js}',      
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './composables/**/*.{ts,js}',
    './plugins/**/*.{ts,js}',  
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['PlusJakartaSans', 'sans-serif'], 
      },
      fontWeight: {
        light: 300, 
        bold: 700, 
      },
      colors: {
        tealCustom: '#72C1BF', 
        blueCustom: '#434A75',
      },
    },
  },
  plugins: [],
}

