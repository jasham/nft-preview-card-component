/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      softBlue: "hsl(215, 51%, 70%)",
      cyan: "hsl(178, 100%, 50%)",
      veryDarkBlueMainBG: "hsl(217, 54%, 11%)",
      veryDarkBlueCardBG: "hsl(216, 50%, 16%)",
      veryDarkBlueLine: "hsl(215, 32%, 27%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },
  },
  plugins: [],
};
