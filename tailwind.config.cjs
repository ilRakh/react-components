/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "0px",
        md: "640px",
        xl: "1290px"
      },
    },
  },
  plugins: [],
};
