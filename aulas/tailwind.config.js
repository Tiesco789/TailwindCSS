const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        arial: ["Arial", "sans-serif"],
      },
      fontSize: {
        "12xl": "8rem",
      },
    },
  },
  plugins: [],
};
