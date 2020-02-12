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

const fadeIn = () => {
  gsap.from('.anim--fade-in', {
    opacity: 0,
    stagger: .075,
    duration: 1,
    ease: Power2.easeInOut
  })
}


const listItemLogic = () => {
  const mq = matchMedia( '(pointer:fine)' )

  if (mq.matches) {
    //five
    const five = document.querySelectorAll('.list-item')[0]
    gsap.set('.five', {
      opacity: 0,
      y: '0',
      x: '0',
    })

    five.addEventListener('mouseenter', () => {
      const tl = gsap.timeline()
      tl.to('.five', {
        // y: 0,
        x: 'random(-1000vw, 1000vw)',
        y: 'random(-100vh, 100vh)',
        scale: 1,
        duration: .1,
      })

      tl.to('.five', {
        opacity: 1,
        stagger: .075,
        duration: .56,
        ease: Power2.easeInOut,
      })
    })

    five.addEventListener('mouseleave', () => {
      const tl = gsap.timeline()
      tl.to('.five', {
        opacity: 0,
        scaleY: 1.5,
        scaleX: .75,
        y: '204%',
        stagger: .056,
        duration: .4,
        ease: Power2.easeInOut
      })

    tl.to('.five', {
        scaleY: 1,
        scaleX: 1,
        x: 'random(-1000vw, 1000vw)',
        y: 'random(-100vh, 100vh)',
        duration: .01,
      })
    })

    // four
    const four = document.querySelectorAll('.list-item')[1]
    gsap.set('.four', {
      opacity: 0,
      y: '0',
      x: '0',
    })

    four.addEventListener('mouseenter', () => {
      const tl = gsap.timeline()
      tl.to('.four', {
        // y: 0,
        x: 'random(-1000vw, 1000vw)',
        y: 'random(-100vh, 100vh)',
        scale: 1,
        duration: .1,
      })

      tl.to('.four', {
        opacity: 1,
        stagger: .075,
        duration: .56,
        ease: Power2.easeInOut,
      })
    })

    four.addEventListener('mouseleave', () => {
      const tl = gsap.timeline()
      tl.to('.four', {
        opacity: 0,
        scaleY: 1.5,
        scaleX: .75,
        y: '204%',
        stagger: .056,
        duration: .4,
        ease: Power2.easeInOut
      })

    tl.to('.four', {
        scaleY: 1,
        scaleX: 1,
        x: 'random(-1000vw, 1000vw)',
        y: 'random(-100vh, 100vh)',
        duration: .01,
      })
    })

    //three
    const three = document.querySelectorAll('.list-item')[2]
    gsap.set('.three', {
      opacity: 0,
      y: '0',
      x: '0',
    })

    three.addEventListener('mouseenter', () => {
      const tl = gsap.timeline()
      tl.to('.three', {
        // y: 0,
        x: 'random(-1000vw, 1000vw)',
        y: 'random(-100vh, 100vh)',
        scale: 1,
        duration: .1,
      })

      tl.to('.three', {
        opacity: 1,
        stagger: .075,
        duration: .56,
        ease: Power2.easeInOut,
      })
    })

    three.addEventListener('mouseleave', () => {
      const tl = gsap.timeline()
      tl.to('.three', {
        opacity: 0,
        scaleY: 1.5,
        scaleX: .75,
        y: '204%',
        stagger: .056,
        duration: .4,
        ease: Power2.easeInOut
      })

    tl.to('.three', {
        scaleY: 1,
        scaleX: 1,
        x: 'random(-1000vw, 1000vw)',
        y: 'random(-100vh, 100vh)',
        duration: .01,
      })
    })

    //two
    const two = document.querySelectorAll('.list-item')[3]
    gsap.set('.two', {
      opacity: 0,
      y: '0',
      x: '0',
    })

    two.addEventListener('mouseenter', () => {
      const tl = gsap.timeline()
      tl.to('.two', {
        // y: 0,
        x: 'random(-1000vw, 1000vw)',
        y: 'random(-100vh, 100vh)',
        scale: 1,
        duration: .1,
      })

      tl.to('.two', {
        opacity: 1,
        stagger: .075,
        duration: .56,
        ease: Power2.easeInOut,
      })
    })

    two.addEventListener('mouseleave', () => {
      const tl = gsap.timeline()
      tl.to('.two', {
        opacity: 0,
        scaleY: 1.5,
        scaleX: .75,
        y: '204%',
        stagger: .056,
        duration: .4,
        ease: Power2.easeInOut
      })

    tl.to('.two', {
        scaleY: 1,
        scaleX: 1,
        x: 'random(-1000vw, 1000vw)',
        y: 'random(-100vh, 100vh)',
        duration: .01,
      })
    })

    // one
    const one = document.querySelectorAll('.list-item')[4]
    gsap.set('.one', {
      opacity: 0,
      y: '0',
      x: '0',
    })

    one.addEventListener('mouseenter', () => {
      const tl = gsap.timeline()
      tl.to('.one', {
        // y: 0,
        x: 'random(-1000vw, 1000vw)',
        y: 'random(-100vh, 100vh)',
        scale: 1,
        duration: .1,
      })

      tl.to('.one', {
        opacity: 1,
        stagger: .075,
        duration: .56,
        ease: Power2.easeInOut,
      })
    })

    one.addEventListener('mouseleave', () => {
      const tl = gsap.timeline()
      tl.to('.one', {
        opacity: 0,
        scaleY: 1.5,
        scaleX: .75,
        y: '204%',
        stagger: .056,
        duration: .4,
        ease: Power2.easeInOut
      })

    tl.to('.one', {
        scaleY: 1,
        scaleX: 1,
        x: 'random(-1000vw, 1000vw)',
        y: 'random(-100vh, 100vh)',
        duration: .01,
      })
    })

  } else {
    gsap.set('img', {
      opacity: 0,
    })
  }

}


export { animateEnter, fadeIn, listItemLogic }