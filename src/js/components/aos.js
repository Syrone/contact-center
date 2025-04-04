import ScrollReveal from 'scrollreveal'

const sr = ScrollReveal()

document.querySelectorAll('[data-animation]').forEach(el => {
  const config = {
    duration: 500,
    delay: 0,
    origin: 'bottom',
    distance: '40px'
  }

  if (el.dataset.animationDuration) {
    config.duration = parseInt(el.dataset.animationDuration, 10)
  }
  if (el.dataset.animationDelay) {
    config.delay = parseInt(el.dataset.animationDelay, 10)
  }
  if (el.dataset.animation) {
    config.origin = el.dataset.animation
  }
  if (el.dataset.animationDistance) {
    config.distance = el.dataset.animationDistance
  }

  sr.reveal(el, config)
})
