(() => {
  const DURATION = 500
  const GRAVITY = 980
  const PARTICLES_PER_CLICK = 10
  const MAX_PARTICLES = 140

  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  const field = document.createElement('div')
  field.className = 'fc-click-particles'
  field.setAttribute('aria-hidden', 'true')
  Object.assign(field.style, {
    position: 'fixed',
    inset: '0',
    zIndex: '9999',
    pointerEvents: 'none',
    overflow: 'hidden',
  })
  document.addEventListener('DOMContentLoaded', () => document.body.appendChild(field), { once: true })

  const particles = []
  let animationFrame = 0

  const random = (min, max) => min + Math.random() * (max - min)

  function removeParticle(particle) {
    const index = particles.indexOf(particle)
    if (index !== -1) particles.splice(index, 1)
    particle.element.remove()
  }

  function animate(now) {
    for (let index = particles.length - 1; index >= 0; index -= 1) {
      const particle = particles[index]
      const elapsed = now - particle.createdAt
      const progress = elapsed / DURATION

      if (progress >= 1) {
        removeParticle(particle)
        continue
      }

      const seconds = elapsed / 1000
      const x = particle.originX + particle.velocityX * seconds
      const y = particle.originY + particle.velocityY * seconds + 0.5 * GRAVITY * seconds * seconds
      const rotation = particle.rotation + particle.rotationSpeed * seconds
      const scale = 1 - progress * 0.35

      particle.element.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`
      particle.element.style.opacity = String(1 - progress)
    }

    animationFrame = particles.length ? window.requestAnimationFrame(animate) : 0
  }

  function createParticle(x, y) {
    const element = document.createElement('span')
    const size = random(8, 20)
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    const outline = document.createElementNS('http://www.w3.org/2000/svg', 'polygon')
    svg.setAttribute('viewBox', '0 0 100 100')
    svg.setAttribute('aria-hidden', 'true')
    svg.setAttribute('width', '100%')
    svg.setAttribute('height', '100%')
    outline.setAttribute('points', '50,5 96,95 4,95')
    outline.setAttribute('fill', 'none')
    outline.setAttribute('stroke', 'rgba(255, 255, 255, 0.96)')
    outline.setAttribute('stroke-width', '10')
    outline.setAttribute('stroke-linejoin', 'round')
    svg.appendChild(outline)
    element.appendChild(svg)
    Object.assign(element.style, {
      position: 'fixed',
      left: '0',
      top: '0',
      width: `${size}px`,
      height: `${size * random(0.8, 1.3)}px`,
      display: 'block',
      filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.65))',
      willChange: 'transform, opacity',
      opacity: '1',
    })

    field.appendChild(element)
    return {
      element,
      originX: x,
      originY: y,
      velocityX: random(-150, 150),
      velocityY: random(-285, -105),
      rotation: random(0, 360),
      rotationSpeed: random(-320, 320),
      createdAt: performance.now(),
    }
  }

  function burst(event) {
    if (event.pointerType === 'mouse' && event.button !== 0) return

    for (let index = 0; index < PARTICLES_PER_CLICK; index += 1) {
      particles.push(createParticle(event.clientX, event.clientY))
    }

    while (particles.length > MAX_PARTICLES) {
      removeParticle(particles[0])
    }

    if (!animationFrame) animationFrame = window.requestAnimationFrame(animate)
  }

  window.addEventListener('pointerdown', burst, { passive: true })
})()
