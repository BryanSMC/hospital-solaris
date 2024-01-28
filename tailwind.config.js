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
        'open-menu': 'url(../assets/images/icon-open.svg)',
        'flecha-izquierda': 'url(../assets/images/izquierda.svg)',
        'flecha-derecha': 'url(../assets/images/derecha.svg)',
        'boton-abrir': 'url(../assets/images/boton-abrir.svg)',
        'boton-cerrar': 'url(../assets/images/boton-cerrar.svg)'
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
}
