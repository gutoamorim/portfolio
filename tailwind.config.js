/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-image": "url('/aseets/hero-bg.png')",
      },
      fontFamily: {
        mono: ["IBM Plex Mono", "sans-serif"],
      },
    },
  },
  plugins: [],
};
