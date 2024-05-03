/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#3b3c36',
        'charcol':'#36454f',
        'custom-blue':'#1e90ff',
        'custom-white':'#f5fffa', 
      },
    },
  },
  plugins: [],
}