/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        portrait: { raw: "(max-aspect-ratio: 3/2)" },
        landscape: { raw: "(min-aspect-ratio: 3/2)" },
        laptop: "1025px",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        "gradient-from": "hsl(6, 100%, 80%)",
        "gradient-to": "hsl(335, 100%, 65%)",
        "pale-blue": "hsl(243, 100%, 93%)",
        "greyish-blue": "hsl(229, 7%, 55%)",
        "dark-blue": "hsl(228, 56%, 26%)",
        "very-dark-blue": "hsl(229, 57%, 11%)",
      },
      fontSize: {
        "custom-font": "clamp(0.8rem, min(2dvw, 2dvh), 8rem)",
      },
    },
  },
  plugins: [],
};
