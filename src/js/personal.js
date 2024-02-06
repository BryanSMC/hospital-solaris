import Joi from 'joi'

export default function personal (login, register, loginRegister, botonesLoginRegister, formInicio, iniciaCorreo, iniciaContraseña, modalError, mensajeError, iniciaModalError, modal, iniciaModal, formRegistro, registroNombre, registroCorreo, registroCodigo, registroContraseña, registroConfirmarContraseña) {
  const d = document

  const $login = d.getElementById(login)
  const $register = d.getElementById(register)
  const $botonesLoginRegister = d.getElementById(botonesLoginRegister)

  $login.addEventListener('click', () => {
    const $iniciarSesion = d.getElementById(loginRegister)

    $botonesLoginRegister.classList.toggle('hidden')

    fetch('iniciar-sesion.html')
      .then((response) => {
        return response.text()
      })
      .then((html) => {
        $iniciarSesion.innerHTML = html
        const $formInicio = d.getElementById(formInicio)
        $formInicio.addEventListener('submit', eventoFormInicio)
      })
      .catch((error) => {
        console.error(error)
      })
  })

  $register.addEventListener('click', () => {
    const $registrarse = d.getElementById(loginRegister)

    $botonesLoginRegister.classList.toggle('hidden')

    fetch('registro.html')
      .then((response) => {
        return response.text()
      })
      .then((html) => {
        $registrarse.innerHTML = html
        const $formRegistro = d.getElementById(formRegistro)
        $formRegistro.addEventListener('submit', eventoFormRegistro)
      })
      .catch((error) => {
        console.error(error)
      })
  })

  function eventoFormInicio (e) {
    e.preventDefault()

    const $iniciaCorreo = d.getElementById(iniciaCorreo)
    const $iniciaContraseña = d.getElementById(iniciaContraseña)

    const schema = Joi.object({
      $iniciaCorreo: Joi.string().trim().email({ tlds: { allow: false } }).empty('').required().messages({
        'string.base': 'El correo debe ser una cadena de texto',
        'string.email': 'El correo no es válido',
        'any.required': 'El correo es obligatorio. Por favor, ingresa un correo.'
      }),
      $iniciaContraseña: Joi.string().trim().min(8).pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/).alphanum().empty('').required().messages({
        'string.base': 'La contraseña es alfanumerica',
        'string.min': 'La contraseña debe tener al menos {#limit} caracteres',
        'string.pattern.base': 'La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número',
        'string.alphanum': 'La contraseña solo debe contener letras y números',
        'any.required': 'La contraseña es obligatoria. Por favor, ingresa una contraseña.'
      })
    })

    const iniciaCorreoValue = $iniciaCorreo.value
    const iniciaContraseñaValue = $iniciaContraseña.value

    const { error } = schema.validate({
      $iniciaCorreo: iniciaCorreoValue,
      $iniciaContraseña: iniciaContraseñaValue
    })

    if (error) {
      error.details.forEach((detail) => {
        const $modal = d.getElementById(modalError)
        const $iniciaModalError = d.getElementById(iniciaModalError)
        const $mensajeError = d.getElementById(mensajeError)

        $mensajeError.insertAdjacentHTML('afterbegin', `${detail.message}`)
        $modal.classList.remove('hidden')

        $iniciaModalError.addEventListener('click', () => {
          $mensajeError.innerHTML = ''
          $modal.classList.add('hidden')
        })
      })
    } else {
      try {
        const $modal = d.getElementById(modal)
        const $iniciaModal = d.getElementById(iniciaModal)
        $modal.classList.remove('hidden')

        $iniciaModal.addEventListener('click', () => {
          $modal.classList.add('hidden')
        })

        $iniciaCorreo.value = ''
        $iniciaContraseña.value = ''
      } catch (error) {
        console.error(`Error al enviar el formulario: ${error}`)
      }
    }
  }

  function eventoFormRegistro (e) {
    e.preventDefault()

    const $registroNombre = d.getElementById(registroNombre)
    const $registroCorreo = d.getElementById(registroCorreo)
    const $registroCodigo = d.getElementById(registroCodigo)
    const $registroContraseña = d.getElementById(registroContraseña)
    const $registroConfirmarContraseña = d.getElementById(registroConfirmarContraseña)

    const registroNombreValue = $registroNombre.value
    const registroCorreoValue = $registroCorreo.value
    const registroCodigoValue = $registroCodigo.value
    const registroContraseñaValue = $registroContraseña.value
    const registroConfirmarContraseñaValue = $registroConfirmarContraseña.value

    if (registroContraseñaValue !== registroConfirmarContraseñaValue) {
      mostrarError('Las contraseñas no coinciden.')
      return // Detener el envío del formulario si las contraseñas no coinciden
    }

    const schema = Joi.object({
      $registroNombre: Joi.string().min(4).empty('').required().messages({
        'string.base': 'El nombre debe ser una cadena de texto',
        'string.min': 'El nombre debe tener al menos {#limit} caracteres',
        'any.required': 'El nombre es obligatorio. Por favor, ingresa un nombre.'
      }),
      $registroCorreo: Joi.string().trim().email({ tlds: { allow: false } }).empty('').required().messages({
        'string.base': 'El correo debe ser una cadena de texto',
        'string.email': 'El correo no es válido',
        'any.required': 'El correo es obligatorio. Por favor, ingresa un correo.'
      }),
      $registroCodigo: Joi.string().trim().min(8).max(8).pattern(/^[a-zA-Z0-9?!$]+$/).empty('').required().messages({
        'string.base': 'El codigo es alfanumerico y con caracteres especiales',
        'string.min': 'El codigo debe tener al menos {#limit} caracteres',
        'string.max': 'El codigo debe como maximo {#limit} caracteres',
        'string.pattern.base': 'El codigo debe contener al menos una letra mayúscula, una letra minúscula, un número, un caracter especial "? ! $"',
        'any.required': 'El codigo es obligatorio. Por favor, ingresa una contraseña.'
      }),
      $registroContraseña: Joi.string().trim().min(8).pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/).alphanum().empty('').required().messages({
        'string.base': 'La contraseña es alfanumerica',
        'string.min': 'La contraseña debe tener al menos {#limit} caracteres',
        'string.pattern.base': 'La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número',
        'string.alphanum': 'La contraseña solo debe contener letras y números',
        'any.required': 'La contraseña es obligatoria. Por favor, ingresa una contraseña.'
      }),
      $registroConfirmarContraseña: Joi.string().trim().min(8).pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/).alphanum().empty('').required().messages({
        'string.base': 'El confirmar contraseña es alfanumerico',
        'string.min': 'El confirmar contraseña debe tener al menos {#limit} caracteres',
        'string.pattern.base': 'El confirmar contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número',
        'string.alphanum': 'El confirmar contraseña solo debe contener letras y números',
        'any.required': 'El confirmar contraseña es obligatorio. Por favor, ingresa una contraseña.'
      })
    })

    const { error } = schema.validate({
      $registroNombre: registroNombreValue,
      $registroCorreo: registroCorreoValue,
      $registroCodigo: registroCodigoValue,
      $registroContraseña: registroContraseñaValue,
      $registroConfirmarContraseña: registroConfirmarContraseñaValue
    })

    if (error) {
      error.details.forEach((detail) => {
        const $modal = d.getElementById(modalError)
        const $iniciaModalError = d.getElementById(iniciaModalError)
        const $mensajeError = d.getElementById(mensajeError)

        $mensajeError.insertAdjacentHTML('afterbegin', `${detail.message}`)
        $modal.classList.remove('hidden')

        $iniciaModalError.addEventListener('click', () => {
          $mensajeError.innerHTML = ''
          $modal.classList.add('hidden')
        })
      })
    } else {
      try {
        const $modal = d.getElementById(modal)
        const $iniciaModal = d.getElementById(iniciaModal)
        $modal.classList.remove('hidden')

        $iniciaModal.addEventListener('click', () => {
          $modal.classList.add('hidden')
        })

        $registroNombre.value = ''
        $registroCorreo.value = ''
        $registroCodigo.value = ''
        $registroContraseña.value = ''
        $registroConfirmarContraseña.value = ''
      } catch (error) {
        console.error(`Error al enviar el formulario: ${error}`)
      }
    }
  }

  function mostrarError (mensaje) {
    const $modal = document.getElementById('modalError')
    const $iniciaModalError = document.getElementById('iniciaModalError')
    const $mensajeError = document.getElementById('mensajeError')

    $mensajeError.textContent = mensaje
    $modal.classList.remove('hidden')

    $iniciaModalError.addEventListener('click', () => {
      $mensajeError.textContent = ''
      $modal.classList.add('hidden')
    })
  }
}
