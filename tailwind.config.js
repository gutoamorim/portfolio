/** @type {import('tailwindcss').Config} */
import heroBg from "./src/assets/hero-bg.png";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      fontFamily: {
        mono: ["IBM Plex Mono", "sans-serif"],
      },
    },
  },
  plugins: [],
};
