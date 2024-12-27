/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      grey: "#2c3440",
      blue: "#2f5af2",
      white: "#fff",
      "dark-bg": "#121b25",
      "light-bg": "#F8F8F8",
      "grey-text": "#D3D3D3",
    },
    extend: {},
  },
  plugins: [],
  darkMode: "selector",
};
