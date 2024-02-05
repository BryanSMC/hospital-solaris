import Joi from 'joi'

export default function agendarCita (formAgendar, nombreCompleto, dni, numeroContacto, correo, servicio, especialidad, especialista, medicinaGeneral, especialistas, mensaje, enviarSolicitudCita, modal, citaModal, modalError, citaModalError, mensajeError) {
  const d = document
  const $formulario = d.getElementById(formAgendar)
  const $nombreCompleto = d.getElementById(nombreCompleto)
  const $dni = d.getElementById(dni)
  const $numeroContacto = d.getElementById(numeroContacto)
  const $correo = d.getElementById(correo)
  const $medicinaGeneral = d.getElementById(medicinaGeneral)
  const $especialidad = d.getElementById(especialidad)
  const $especialista = d.getElementById(especialista)
  const $especialistas = d.getElementById(especialistas)
  const $servicio = d.getElementById(servicio)
  const $mensaje = d.getElementById(mensaje)
  const $enviarSolicitudCita = d.getElementById(enviarSolicitudCita)

  $formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const schema = Joi.object({
      $nombreCompleto: Joi.string().min(4).empty('').required().messages({
        'string.base': 'El nombre debe ser una cadena de texto',
        'string.min': 'El nombre debe tener al menos {#limit} caracteres',
        'any.required': 'El nombre es obligatorio. Por favor, ingresa un nombre.'
      }),
      $dni: Joi.number().min(8).empty('').required().messages({
        'string.base': 'La cedula debe ser numerico',
        'string.min': 'La cedula debe tener al menos {#limit} caracteres',
        'any.required': 'La cedula es obligatoria. Por favor, ingresa una cedula.'
      }),
      $numeroContacto: Joi.number().min(10).empty('').required().messages({
        'string.base': 'El contacto debe ser numerico',
        'string.min': 'El contacto debe tener al menos {#limit} caracteres',
        'any.required': 'El contacto es obligatoria. Por favor, ingresa un contacto.'
      }),
      $correo: Joi.string().email({ tlds: { allow: false } }).empty('').required().messages({
        'string.base': 'El correo debe ser una cadena de texto',
        'string.email': 'El correo no es válido',
        'any.required': 'El correo es obligatorio. Por favor, ingresa un correo.'
      }),
      $mensaje: Joi.string().min(10).empty('').messages({
        'string.base': 'El mensaje debe ser una cadena de texto',
        'string.min': 'El mensaje debe tener al menos {#limit} caracteres',
        'any.required': 'El mensaje es obligatorio. Por favor, ingresa un mensaje.'
      })
    })

    const nombreCompletoValue = $nombreCompleto.value
    const dniValue = $dni.value
    const numeroContactoValue = $numeroContacto.value
    const correoValue = $correo.value
    const mensajeValue = $mensaje.value

    const { error } = schema.validate({
      $nombreCompleto: nombreCompletoValue,
      $dni: dniValue,
      $numeroContacto: numeroContactoValue,
      $correo: correoValue,
      $mensaje: mensajeValue
    })

    if (error) {
      console.log('test')
      error.details.forEach(detail => {
        const $modal = d.getElementById(modalError)
        const $citaModalError = d.getElementById(citaModalError)
        const $mensajeError = d.getElementById(mensajeError)

        $mensajeError.insertAdjacentHTML('afterbegin', `${detail.message}`)
        $modal.classList.remove('hidden')

        $citaModalError.addEventListener('click', () => {
          $mensajeError.innerHTML = ''
          $modal.classList.add('hidden')
        })
      })
    } else {
      try {
        const $modal = d.getElementById(modal)
        const $citaModal = d.getElementById(citaModal)
        $modal.classList.remove('hidden')

        $citaModal.addEventListener('click', () => {
          $modal.classList.add('hidden')
        })

        $nombreCompleto.value = ''
        $dni.value = ''
        $numeroContacto.value = ''
        $correo.value = ''
        $mensaje.value = ''
      } catch (error) {
        console.log(`Error al enviar el formulario: ${error}`)
      }
    }
  })

  $servicio.addEventListener('change', function () {
    if (this.value === 'medicinaGeneral') {
      $medicinaGeneral.style.display = 'flex'
      $especialistas.style.display = 'none'
    } else if (this.value === 'especialistas') {
      $medicinaGeneral.style.display = 'none'
      $especialistas.style.display = 'flex'
    } else {
      $medicinaGeneral.style.display = 'none'
      $especialistas.style.display = 'none'
    }
  })
}
