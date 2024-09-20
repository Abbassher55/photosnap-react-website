/** @type {import('tailwindcss').Config} */
const tailwindRtl = require("tailwindcss-rtl");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          lg: "4rem",
          md: "3rem",
        },
      },
      fontFamily: {
        tawajal: ["Tawajal", "sans-serif"],
      },
      colors: {
        "menu-blue": "#1B4166",
        "half-blue": "#799FC3",
        "theme-blue": "#094C70",
        "theme-yellow": "#FFC000",
        "theme-green": "#03625F",
        "theme-light-white": "#EEF5FF",
        "theme-cream": "#F1EEE9",
        "section-light-blue": "#c5dff84d",
        "title-light": "#91c8e433",
        "footer-input": "#CACCCF",
      },
    },
    variants: {
      extend: {
        backgroundImage: ["before"],
      },
    },
  },
  plugins: [tailwindRtl],
};
