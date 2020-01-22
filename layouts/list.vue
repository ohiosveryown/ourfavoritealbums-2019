<!-- layout -->
<template>
  <div class="app-wrapper--list">
    <nuxt/>
  </div>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '~/assets/grid.scss';


</style>


<!-- logic -->
<script>
  import Logotype from '~/components/Logotype'

  export default {
    components: { Logotype },
  }
</script>
