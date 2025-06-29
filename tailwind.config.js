/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royalblue: '#4169E1',
        softbeige: '#FAF9F6',
        lightgray: '#F1F5F9',
      },
    },
  },
  plugins: [],
};