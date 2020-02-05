<!-- layout -->
<template>
  <div class="index--wrapper width">


    <Navigation class="stone">
      <template v-slot:left>Null</template>
      <template v-slot:center>Albums <span>of the</span> Year</template>
      <template v-slot:right>Null</template>
    </Navigation>


    <header class="stone">
      <div class="header--content">
        <h2 class="anim--enter">2019</h2>
        <h1 class="anim--enter">The second annual installment of “Our Favorite Albums”, built on friendship & code.</h1>
        <p class="anim--enter">2019 was a great year for music. To catalog this period of sonic mastery, myself and a group of friends want to share our favorites with you. This site was designed and built by me, Matt – and you can view the source here.</p>
        <p class="anim--enter">The site is built on vue, saber and friendship. The type is set in Respira by Sharp Type and Steinbeck by The Temporary State.</p>
      </div>

      <Logotype
        class = "anim--enter outline--stone"
        style = "fill: red;"
        title = 'aoty'
      />
    </header>




  </div>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '~/assets/grid.scss';



</style>


<!-- logic -->
<script>
  import { animateEnter } from '~/logic/animate.js'
  import Navigation from '~/components/Navigation'
  import Logotype from '~/components/Logotype'

  export default {

    beforeMount() {
      document.body.style.background = 'var(--gravity)'
    },

    mounted() {
      animateEnter()
    },

    components: { Navigation, Logotype }

  }
</script>
