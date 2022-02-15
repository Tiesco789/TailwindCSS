const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "new-blue": "#243c5a",
        gray: {
          ...colors.gray,
          900: "#999",
        },
      },
      spacing: {
        50: "20rem",
      },
    },
  },
  plugins: [],
};
