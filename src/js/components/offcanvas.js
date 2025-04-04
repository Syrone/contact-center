import Offcanvas from 'bootstrap/js/dist/offcanvas.js'

window.offcanvasInstances = new Map()

window.initializeOffcanvas = function (element) {
  const offcanvas = new Offcanvas(element)
  offcanvasInstances.set(element, offcanvas)
}

document.querySelectorAll('.offcanvas').forEach((element) => {
  initializeOffcanvas(element)
})

document.body.addEventListener('click', (event) => {
  const target = event.target.closest('[data-bs-toggle="offcanvas"]')
  if (!target) return

  event.preventDefault()
  event.stopPropagation()

  const offcanvasElement = document.querySelector(target.getAttribute('data-bs-target'))

  if (!offcanvasInstances.has(offcanvasElement)) {
    initializeOffcanvas(offcanvasElement)
    offcanvasInstances.get(offcanvasElement).show()
  }
})
