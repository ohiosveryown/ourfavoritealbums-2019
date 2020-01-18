<!-- layout -->
<template>
  <nav>
    {{ left }}
    {{ title }}
    {{ right }}
  </nav>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '~/assets/grid.scss';

</style>


<!-- logic -->
<script>
  export default {
    props: [ 'left', 'title', 'right' ]
  }
</script>
