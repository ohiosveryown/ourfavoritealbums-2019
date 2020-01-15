<!-- layout -->
<template>
  <main class="container">
    <img src="https://picsum.photos/800/300" alt="">
    <h1 class="debug luxy-el">
      <nuxt-link to = '/about'>Our Favorite Albums</nuxt-link>
    </h1>
    <img src="https://picsum.photos/800/300" alt="">
  </main>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '~/assets/grid.scss';

  h1 {
    color: red;
    @include breakpoint(mdl) { color: purple; }
  }
</style>


<!-- logic -->
<script>
  // import lxy from '../plugins/ga.js'
  export default {
    mounted() {
      // luxy.init({
      //   wrapperSpeed:  0.06,
      // })
    },
    components: {

    }
  }
</script>
