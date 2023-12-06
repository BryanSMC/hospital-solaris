/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.html',
    './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'close-menu': 'url(../assets/images/icon-close.svg)',
        'open-menu': 'url(../assets/images/icon-open.svg)'
      }
    }
  },
  plugins: []
}
