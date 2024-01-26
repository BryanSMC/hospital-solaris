import Joi from 'joi'
import emailJs from '@emailjs/browser'

export default function contacto (contactoForm, nombre, correo, mensaje, modalError, contactoModalError, mensajeError, modal, contactoModal) {
  const d = document

  const $formulario = d.getElementById(contactoForm)

  $formulario.addEventListener('submit', async (e) => {
    e.preventDefault()

    const $nombre = d.getElementById(nombre)
    const $correo = d.getElementById(correo)
    const $mensaje = d.getElementById(mensaje)

    const schema = Joi.object({
      $nombre: Joi.string().min(4).empty('').required().messages({
        'string.base': 'El nombre debe ser una cadena de texto',
        'string.min': 'El nombre debe tener al menos {#limit} caracteres',
        'any.required': 'El nombre es obligatorio. Por favor, ingresa un nombre.'
      }),
      $correo: Joi.string().email({ tlds: { allow: false } }).empty('').required().messages({
        'string.base': 'El correo debe ser una cadena de texto',
        'string.email': 'El correo no es válido',
        'any.required': 'El correo es obligatorio. Por favor, ingresa un correo.'
      }),
      $mensaje: Joi.string().min(10).empty('').required().messages({
        'string.base': 'El mensaje debe ser una cadena de texto',
        'string.min': 'El mensaje debe tener al menos {#limit} caracteres',
        'any.required': 'El mensaje es obligatorio. Por favor, ingresa un mensaje.'
      })
    })

    const nombreValue = $nombre.value
    const correoValue = $correo.value
    const mensajeValue = $mensaje.value

    const { error } = schema.validate({ $nombre: nombreValue, $correo: correoValue, $mensaje: mensajeValue })

    if (error) {
      error.details.forEach(detail => {
        const $modal = d.getElementById(modalError)
        const $contactoModalError = d.getElementById(contactoModalError)
        const $mensajeError = d.getElementById(mensajeError)

        $mensajeError.insertAdjacentHTML('afterbegin', `${detail.message}`)
        $modal.classList.remove('hidden')

        $contactoModalError.addEventListener('click', () => {
          $mensajeError.innerHTML = ''
          $modal.classList.add('hidden')
        })
      })
    } else {
      try {
        const templateParams = {
          nombre: nombreValue,
          nombre_hs: 'Hospital Solaris',
          mensaje: mensajeValue,
          correo: correoValue
        }

        await emailJs.send(
          'service_ghlonx9',
          'template_9oz9kcn',
          templateParams,
          '6oduoRPLiSuDKAP-K'
        )

        const $modal = d.getElementById(modal)
        const $contactoModal = d.getElementById(contactoModal)
        $modal.classList.remove('hidden')

        $contactoModal.addEventListener('click', () => {
          $modal.classList.add('hidden')
        })

        $nombre.value = ''
        $correo.value = ''
        $mensaje.value = ''
      } catch (error) {
        console.log(`Error al enviar el formulario: ${error}`)
      }
    }
  })
}
