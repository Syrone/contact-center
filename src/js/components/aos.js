import AOS from 'aos'

window.addEventListener('load', () => {
  AOS.init({
    easing: 'ease-in-out',
    once: true,
    disableMutationObserver: true
  })

  setTimeout(() => window.scrollTo(0, 0))
})
