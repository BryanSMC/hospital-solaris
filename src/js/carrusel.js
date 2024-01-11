export default function carrusel (carrusel, fotos, retroceder, seguir) {
  const d = document
  const $carrusel = d.getElementById(carrusel)
  const $retroceder = d.getElementById(retroceder)
  const $seguir = d.getElementById(seguir)

  let intervalId

  function siguiente () {
    const $priFoto = d.querySelectorAll(fotos)[0]

    $carrusel.style.transition = 'margin-left .5s ease'
    $carrusel.style.marginLeft = '-200%'

    setTimeout(() => {
      $carrusel.style.transition = 'none'
      $carrusel.insertAdjacentElement('beforeend', $priFoto)
      $carrusel.style.marginLeft = '-100%'
    }, 500)
  }

  function atras () {
    const $fotos = d.querySelectorAll(fotos)
    const $ultFoto = $fotos[$fotos.length - 1]

    $carrusel.style.transition = 'margin-left .5s ease'
    $carrusel.style.marginLeft = '0%'

    setTimeout(() => {
      $carrusel.style.transition = 'none'
      $carrusel.insertAdjacentElement('afterbegin', $ultFoto)
      $carrusel.style.marginLeft = '-100%'
    }, 500)
  }

  function iniciarAutoplay () {
    intervalId = setInterval(() => {
      siguiente()
    }, 5000)
  }

  function detenerAutoplay () {
    clearInterval(intervalId)
  }

  $seguir.addEventListener('click', (e) => {
    detenerAutoplay()
    siguiente()
    iniciarAutoplay()
  })

  $retroceder.addEventListener('click', (e) => {
    detenerAutoplay()
    atras()
    iniciarAutoplay()
  })

  iniciarAutoplay()
}
