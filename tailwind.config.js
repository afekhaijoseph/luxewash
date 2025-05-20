/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        playfair: ["Playfair", "serif"],
      },
      colors: {
        primary: "#9c8165",
        secondary: "#36454F",
      },
    },
  },
  plugins: [],
};
