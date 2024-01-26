export default function personal (login, register, loginRegister, botonesLoginRegister) {
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
      })
      .catch((error) => {
        console.error(error)
      })
  })
}
