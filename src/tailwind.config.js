/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "",
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
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      "primary": "#0f766e",
      "secondary": "#01ADD8",
      "accent": "#2dd4bf",
      "neutral": "#1c1917",
      "base-100": "#292524",
      "info": "#2dd4bf",
      "success": "#0f766e",
      "warning": "#fbbf24",    
      "error": "#F87272",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        // sm: '2rem',
        // lg: '4rem',
        // xl: '5rem',
        // '2xl': '6rem',
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#6419E6",
        },
      }
    ],
  },
  
  plugins: [
    // require("@tailwindcss/typography"),
    require("daisyui")
  ],

  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          "primary": "#0f766e",
          "secondary": "#01ADD8",
          "accent": "#2dd4bf",
          "neutral": "#1c1917",
          "base-100": "#292524",
          "info": "#2dd4bf",
          "success": "#0f766e",
          "warning": "#fbbf24",    
          "error": "#F87272",
          "error-content": "#881337",
        },
      },
      "night"
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "mytheme",
  },
}
