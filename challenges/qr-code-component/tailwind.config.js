/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit"],
      },
      colors: {
        white: "hsl(0, 0%, 100%)",
        blue: "hsl(218, 44%, 22%)",
        "blue-gray": "hsl(220, 15%, 55%)",
        "light-gray": "hsl(212, 45%, 89%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
