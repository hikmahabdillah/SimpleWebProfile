/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      maxWidth: {
        85: "22rem",
      },
    },
  },
  plugins: [],
};
