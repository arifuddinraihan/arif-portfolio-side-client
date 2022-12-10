/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#28222A",

          "secondary": "#f7e7b9",

          "accent": "#2aba58",

          "neutral": "#28222A",

          "base-100": "#F2F1EF",

          "info": "#5184DB",

          "success": "#16A74D",

          "warning": "#D08C16",

          "error": "#E33B51",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
