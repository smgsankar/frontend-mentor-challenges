/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit"],
      },
      colors: {
        "light-cyan": "hsl(193, 38%, 86%)",
        "neon-green": "hsl(150, 100%, 66%)",
        "blue-gray": "hsl(217, 19%, 38%)",
        "dark-blue-gray": "hsl(217, 19%, 24%)",
        "dark-blue": "hsl(218, 23%, 16%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
