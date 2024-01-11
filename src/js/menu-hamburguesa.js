export default function menuHamburguesa (botonMenu, mobileMenu, contenedorMenu) {
  const d = document

  const $botonMenu = d.getElementById(botonMenu)
  const $mobileMenu = d.getElementById(mobileMenu)
  const $contenedorMenuItems = d.querySelectorAll(`${contenedorMenu} li a`)

  $botonMenu.addEventListener('click', () => {
    $mobileMenu.classList.toggle('hidden')
    $botonMenu.classList.toggle('bg-open-menu')
    $botonMenu.classList.toggle('bg-close-menu')
  })

  $contenedorMenuItems.forEach(item => {
    item.addEventListener('click', () => {
      $botonMenu.classList.remove('bg-close-menu')
      $botonMenu.classList.add('bg-open-menu')
      $mobileMenu.classList.add('hidden')
    })
  })
}
