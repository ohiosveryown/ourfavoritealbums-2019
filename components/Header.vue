<!-- layout -->
<template>
  <header>
    <h2 class="headline infrared mb-3">{{ kicker }}</h2>
    <h1 class="display">{{ title }}</h1>
  </header>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '~/assets/grid.scss';

</style>


<!-- logic -->
<script>
  export default {
    props: [ 'kicker', 'title', ]
  }
</script>
