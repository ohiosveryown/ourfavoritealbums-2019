<!-- layout -->
<template>
  <div class="container">
    <h1 class="debug body">Our Favorite Albums</h1>
  </div>
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
  export default {
    components: {

    }
  }
</script>
