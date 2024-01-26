import menuHamburguesa from './menu-hamburguesa'
import carrusel from './carrusel'
import personal from './personal'
import contacto from './contacto'

const d = document

// Obtener el nombre del archivo html actual
const path = window.location.pathname
const page = path.split('/').pop()

d.addEventListener('DOMContentLoaded', () => {
  // Menu Hamburguesa
  menuHamburguesa('boton-menu', 'menu-mobile', '.contenedor-menu')

  if (page === 'inicio.html') {
    // Carrusel
    carrusel('carrusel', '.foto-carrusel', 'retroceder-carrusel', 'seguir-carrusel')
  }

  if (page === 'contactenos.html') {
    contacto('contactoForm', 'nombre', 'correo', 'mensaje', 'modalError', 'contactoModalError', 'mensajeError', 'modal', 'contactoModal')
  }

  if (page === 'personal.html') {
    // Carrusel
    personal('login', 'register', 'loginRegister', 'botonesLoginRegister')
  }
})
