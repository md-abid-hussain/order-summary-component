/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "desktop-background": "url('../images/pattern-background-desktop.svg')",
        "mobile-background": "url('../images/pattern-background-mobile.svg')",
      },
      boxShadow: {
        "btn-shadow": "0 20px 24px 0px",
      },
      colors: {
        "pale-blue": "#e0e8ff",
        "very-pale-blue": "#f5f7ff",
        "bright-blue": "#3829e0",
        "unsaturated-blue": "#7280a7",
        "custom-dark-blue": "#1f2f56",
        "custom-shadow": "#3829e045",
      },
      fontFamily: {
        redHat: ["Red Hat Display", "sans-serif"],
      },
      maxWidth: {
        450: "450px",
      },
      spacing: {
        13: "52px",
      },
    },
  },
  plugins: [],
};
