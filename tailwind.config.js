/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        bgGray: "#2F2F2F",
        bgBlack: "#1F1F1F",
        name: "#B1B1B1",
        flo: "#5FDD33",
      },
    },
  },
  plugins: [],
};
