/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app.vue", // <= ドキュメントからさらに追加
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "Error.{js,ts,vue}",
    "error.{js,ts,vue}",
    "content/**/*.md"
  ],
  theme: {
    extend: {
      colors: {
        primary: defaultTheme.colors.green
      }
    },
  },
  plugins: [],
}
