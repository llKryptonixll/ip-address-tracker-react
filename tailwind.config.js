/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js}",
  ],
  theme: {
    extend: {
      colors: {
        very_dark_gray: "hsl(0, 0%, 17%)",
        dark_gray: "hsl(0, 0%, 59%)",
        loader_bg: "hsl(240, 39%, 47%)",
        error_red: "hsl(0, 100%, 73%)",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"]
      },
      fontSize: {
        base: "18px"
      }
    },
  },
  plugins: [],
}