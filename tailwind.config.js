/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans", "arial"],
      },
      screens: {
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "940px" },
        sm: { max: "640px" },
      },
      colors: {
        primary: "#4397A4",
      },
    },
  },
  plugins: [],
};
