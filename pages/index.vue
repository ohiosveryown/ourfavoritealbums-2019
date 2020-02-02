<!-- layout -->
<template>
  <div class="debug index-wrapper width">

    <section class="viewport">
      <div id="scroll-container" class="scroll-container">
        <div class="content">
      <div class="img-container">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-10.jpg" alt="">
      </div>
      <div class="img-container">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-14.jpg" alt="">
      </div>
      <div class="img-container">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-15.jpg" alt="">
      </div>
      <div class="img-container">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-16.jpg" alt="">
      </div>
      <!--  REPEAT  -->

      <div class="img-container">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-10.jpg" alt="">
      </div>
      <div class="img-container">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-14.jpg" alt="">
      </div>
      <div class="img-container">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-15.jpg" alt="">
      </div>
      <div class="img-container">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-16.jpg" alt="">
      </div>
      <!--  REPEAT  -->

      <div class="img-container">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-10.jpg" alt="">
      </div>
      <div class="img-container">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-14.jpg" alt="">
      </div>
      <div class="img-container">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-15.jpg" alt="">
      </div>
      <div class="img-container">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/splash-16.jpg" alt="">
      </div>
        </div>
      </div>
    </section>

  </div>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '~/assets/grid.scss';

body {
  overflow-x: hidden;
  overflow-y: scroll;
}

.viewport {
  overflow: hidden;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.scroll-container {
  position: absolute;
  overflow: hidden;
  z-index: 10;
  display: flex;
  justify-content: center;
  backface-visibility: hidden;
  transform-style: preserve-3d;
}

.content {
  width: 60%;
  padding-top:50px;
}

.img-container {
  margin: 0 0 50px;

  img {
    max-width: 100%;
    width: 100%;
    height: auto;
  }
}

</style>


<!-- logic -->
<script>
  export default {
    mounted() {
      var html = document.documentElement
      var body = document.body

      var scroller = {
        target: document.querySelector("#scroll-container"),
        ease: 0.05, // <= scroll speed
        endY: 0,
        y: 0,
        resizeRequest: 1,
        scrollRequest: 0,
      }

      var requestId = null;

      TweenLite.set(scroller.target, {
        rotation: 0.01,
        force3D: true
      })

      window.addEventListener("load", onLoad)

      function onLoad() {
        updateScroller()
        window.focus()
        window.addEventListener("resize", onResize)
        document.addEventListener("scroll", onScroll)
      }

      function updateScroller() {

        var resized = scroller.resizeRequest > 0

        if (resized) {
          var height = scroller.target.clientHeight
          body.style.height = height + "px"
          scroller.resizeRequest = 0
        }

        var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0

        scroller.endY = scrollY
        scroller.y += (scrollY - scroller.y) * scroller.ease

        if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
          scroller.y = scrollY
          scroller.scrollRequest = 0
        }

        TweenLite.set(scroller.target, {
          y: -scroller.y
        });

        requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null
      }

      function onScroll() {
        scroller.scrollRequest++
        if (!requestId) {
          requestId = requestAnimationFrame(updateScroller)
        }
      }

      function onResize() {
        scroller.resizeRequest++
        if (!requestId) {
          requestId = requestAnimationFrame(updateScroller)
        }
      }

      gsap.from('img', {
        opacity: 0,
        y: 200,
        skewY: 10,
        stagger: .075,
        duration: 1,
        ease: Power2.easeInOut
      })
    },

    beforeDestroy() {
      // document.body.style.background = 'var(--stone)'
    },

    components: {  }
  }
</script>
