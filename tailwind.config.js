/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#F5F5F5',
        second_white: '#D8D8D8',
        black: '#1A1A1A',
        second_black: '#302F2F',
        third_black: '#494949',
        primary: '#FF2E9A',
        secondary: '#AE035C',
      },
      fontFamily: {
        lobster: ["Lobster", "cursive"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
