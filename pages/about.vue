<!-- layout -->
<template>
  <div class="debug index-wrapper width">

    <h1>About</h1>
    <n-link to = '/'>Go to index</n-link>

    <div class="content">
      <div class="img-container">
        <img src="~static/img/about1.png" alt="">
      </div>
      <div class="img-container">
        <img src="~static/img/about1.png" alt="">
      </div>
      <div class="img-container">
        <img src="~static/img/about1.png" alt="">
      </div>
      <div class="img-container">
        <img src="~static/img/about1.png" alt="">
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
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '~/assets/grid.scss';


</style>


<!-- logic -->
<script>
  import { scrolling } from '~/logic/forApp.js'
  export default {
    mounted() {

      scrolling()

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
