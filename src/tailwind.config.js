/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "App.{js,ts,vue}",
    "Error.{js,ts,vue}",
    "error.{js,ts,vue}",
    "content/**/*.md"
  ],
  theme: {
    extend: {
      // colors: {
      //   primary: defaultTheme.colors.green
      // }
    },
  },
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         "primary": "#6419E6",
  //       },
  //     },
  //   ],
  // },
  
  plugins: [
    // require("@tailwindcss/typography"),
    require("daisyui")
  ],
}
