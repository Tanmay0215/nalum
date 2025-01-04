/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        brick: "#7F1F22",
      },
      backgroundImage: {
        "admin": "url('/src/assets/admin.png')",
      }
    },
  },
  plugins: [],
};
