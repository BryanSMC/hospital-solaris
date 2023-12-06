export default function menuHamburguesa (botonMenu, mobileMenu, contenedorMenu) {
  const d = document

  const $botonMenu = d.getElementById(botonMenu)
  const $mobileMenu = d.getElementById(mobileMenu)
  const $contenedorMenu = d.querySelector(contenedorMenu)

  $botonMenu.addEventListener('click', () => {
    console.log('hola')
    $mobileMenu.classList.toggle('hidden')
    $botonMenu.classList.toggle('bg-open-menu')
    $botonMenu.classList.toggle('bg-close-menu')
  })

  $contenedorMenu.addEventListener('click', () => {
    $botonMenu.classList.remove('bg-close-menu')
    $botonMenu.classList.add('bg-open-menu')
    $mobileMenu.classList.add('hidden')
  })
}
