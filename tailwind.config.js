/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-nest': {
          50: '#f0f9f1',
          100: '#dcf1de',
          200: '#bae3bf',
          300: '#8dce95',
          400: '#5ab366',
          500: '#3a9a47',
          600: '#2c7b38',
          700: '#25622e',
          800: '#214f28',
          900: '#1d4223',
        },
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 