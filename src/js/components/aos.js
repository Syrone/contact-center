import AOS from 'aos'

window.addEventListener('load', () => {
  AOS.init({
    easing: 'ease-in-out',
    offset: 40,
    once: true,
    mirror: true,
  })

  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 10)
})
