/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-image": "url('src/assets/hero-bg.png')",
      },
      fontFamily: {
        mono: ["IBM Plex Mono", "sans-serif"],
      },
    },
  },
  plugins: [],
};
