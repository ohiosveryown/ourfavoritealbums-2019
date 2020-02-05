const animateEnter = () => {
  gsap.from('.anim--enter', {
    opacity: 0,
    y: 200,
    skewY: 10,
    stagger: .075,
    duration: 1,
    ease: Power2.easeInOut
  })
}

export { animateEnter }