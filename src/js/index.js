import menuHamburguesa from './menu-hamburguesa'
import carrusel from './carrusel'
import personal from './personal'
import contacto from './contacto'
import panel from './panel'
import agendarCita from './agendar-cita'

const d = document

// Obtener el nombre del archivo html actual
const path = window.location.pathname
const page = path.split('/').pop()

d.addEventListener('DOMContentLoaded', () => {
  // Menu Hamburguesa
  if (page !== 'panel.html') {
    menuHamburguesa('boton-menu', 'menu-mobile', '.contenedor-menu')
  }

  // Carrusel
  if (page === 'inicio.html') {
    carrusel('carrusel', '.foto-carrusel', 'retroceder-carrusel', 'seguir-carrusel')
  }

  // Contactenos
  if (page === 'contactenos.html') {
    contacto('contactoForm', 'nombre', 'correo', 'mensaje', 'modalError', 'contactoModalError', 'mensajeError', 'modal', 'contactoModal')
  }

  // Personal
  if (page === 'personal.html') {
    personal('login', 'register', 'loginRegister', 'botonesLoginRegister', 'formInicio', 'iniciaCorreo', 'iniciaContraseña', 'modalError', 'mensajeError', 'iniciaModalError', 'modal', 'iniciaModal', 'formRegistro', 'registroNombre', 'registroCorreo', 'registroCodigo', 'registroContraseña', 'registroConfirmarContraseña')
  }

  // Panel
  if (page === 'panel.html') {
    panel('buttonOpenClose', 'sidebar')
  }

  // Agendar Cita
  if (page === 'agendar-cita.html') {
    agendarCita('formAgendar', 'nombreCompleto', 'numeroIdentificacion', 'numeroContacto', 'correo', 'servicio', 'especialidad', 'especialista', 'opcionesCitaMedicinaGeneral', 'opcionesCitasEspecialistas', 'mensaje', 'enviarSolicitudCita', 'modal', 'citaModal', 'modalError', 'citaModalError', 'mensajeError')
  }
  /*
  if (page === '.html') {

  }
  */
})
