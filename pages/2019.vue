<!-- layout -->
<template>
  <div class="index--wrapper width">


    <Navigation class="stone">
      <template v-slot:left>20</template>
      <template v-slot:center>
        <n-link to = '/'>Albums <span>of the</span> Year</n-link>
      </template>
      <template v-slot:right>19</template>
    </Navigation>


    <main>
      <header class="stone">
        <article>
          <h2 class="anim--enter headline infrared mb-1">Intro</h2>
          <h1 class="anim--enter display stone mb-4">Albums of the Year is a communal project built around music & friendship established in 2018.</h1>
          <p class="anim--enter body stone">2019 was a great year for music. To catalog this period of sonic mastery, myself and a group of friends want to share our favorites with you. This site was designed and built by me, Matt – and you can view the source here.</p>
          <p class="anim--enter body stone mb-4">The site is built on vue, saber and friendship. The type is set in Respira by Sharp Type and Steinbeck by The Temporary State.</p>
        </article>

        <Logotype
          class = "anim--enter outline--stone"
          style = "fill: red;"
          title = 'aoty'
        />
      </header>

      <section>

      </section>
    </main>




  </div>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '~/assets/grid.scss';

  main {
    padding: 11.2rem 0;
  }

  header {
    display: flex;
    flex-direction: column-reverse;

    @include breakpoint(md) {
      flex-direction: row;
    }
  }

  p + p { text-indent: 3ch; }

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
