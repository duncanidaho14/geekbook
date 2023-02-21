/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/app.js",
    "./assets/styles/app.scss",
    "./templates/**/*.html.twig",
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
