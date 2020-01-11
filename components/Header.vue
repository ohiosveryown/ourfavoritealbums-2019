<!-- layout -->
<template>
  <header>
    <h2 class="headline">{{ kicker }}</h2>
    <h1 class="display">{{ title }}</h1>
  </header>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '~/assets/grid.scss';

  h2 { color: var(--infrared); }

</style>


<!-- logic -->
<script>
  export default {
    props: [ 'kicker', 'title', ]
  }
</script>
