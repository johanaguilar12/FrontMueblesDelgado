/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#253F70',
        customBlueLight: '#1A4A89',
      },
    },
  },
  plugins: [],
}

