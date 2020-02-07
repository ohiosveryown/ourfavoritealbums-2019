<!-- layout -->
<template>
  <div class="list--wrapper width">

    <Navigation class="gravity">
      <template v-slot:left>
        <n-link to = '/2019'>Lists</n-link>
      </template>
      <template v-slot:center>
        <n-link to = '/2019'>Albums <span class="italic">of the</span> Year</n-link>
      </template>
      <template v-slot:right>Matt</template>
    </Navigation>

    <main>
      <Logotype
        class = "anim--enter outline--infrared"
        style = "fill: var(--gravity);"
        title = 'Matt'
      />
    </main>

  </div>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '~/assets/grid.scss';

  .logotype { margin: 0 auto; }

  main { padding: 11.2rem 0; }

</style>


<!-- logic -->
<script>
  import { animateEnter } from '~/logic/animate.js'
  import Navigation from '~/components/Navigation'
  import Logotype from '~/components/Logotype'


  export default {
    components: { Navigation, Logotype, },

    beforeMount() {
      // document.body.style.background = 'var(--gravity)'
    },

    mounted() {
      animateEnter()
    },

  }
</script>
