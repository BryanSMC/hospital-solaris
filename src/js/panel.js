export default function panel (buttonOpenClose, sidebar) {
  const d = document

  const $buttonOpenClose = d.getElementById(buttonOpenClose)
  const $sidebar = d.getElementById(sidebar)

  $buttonOpenClose.addEventListener('click', () => {
    $buttonOpenClose.classList.toggle('bg-boton-abrir')
    $buttonOpenClose.classList.toggle('bg-boton-cerrar')

    $sidebar.classList.toggle('w-24')
    $sidebar.classList.toggle('w-80')
  })
}
