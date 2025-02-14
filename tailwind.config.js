/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}", "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
  theme: {
    extend: {
      colors: {},
      keyframes: {
        translateX15: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(15%)" },
        },
        translateXreverse15: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-15%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        translateX15: "translateX15 1s ease-in-out infinite",
        translateXreverse15: "translateXreverse15 1s ease-in-out 1",
        fadeIn: "fadeIn 1s ease-in-out 1",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  unknownAtRules: "warn", // 또는 'ignore'
  darkMode: ["class"],
};
