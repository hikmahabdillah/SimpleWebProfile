/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
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
