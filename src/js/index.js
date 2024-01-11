import menuHamburguesa from './menu-hamburguesa'
import carrusel from './carrusel'

const d = document

d.addEventListener('DOMContentLoaded', () => {
  // Menu Hamburguesa
  menuHamburguesa('boton-menu', 'menu-mobile', '.contenedor-menu')

  // Carrusel
  carrusel('carrusel', '.foto-carrusel', 'retroceder-carrusel', 'seguir-carrusel')
})
