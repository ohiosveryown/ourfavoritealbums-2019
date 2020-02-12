<!-- layout -->
<template>
  <div ref='all' class="index--wrapper width">


    <Navigation class="anim--fade-in stone">
      <template v-slot:center>Albums <span class="italic">of the</span> Year</template>
    </Navigation>


    <main>
      <header class="header mb-5">
        <h2 class="anim--enter headline infrared mb-1">About</h2>
        <p class="anim--enter display stone mb-4">Albums of the Year is a communal project built around music & friendship established in 2018.</p>
        <p class="anim--enter display stone mb-4">To catalog the sonic mastery that is music, myself and a group of friends want to share our favorites with you.</p>
        <p class="anim--enter display stone mb-2">This site was designed and built by me, <a href="https://twitter.com/cmykw_" target="_blank" class="link">Matt</a>. Get started by selecting a year <span class="sm">below</span><span class="not-sm">to the right</span>, or travel <n-link class="link" to = '/2019'>back to 2019</n-link> 🤙🏼.</p>
      </header>

      <section>
        <h3 class="anim--enter headline mb-1 infrared">By the Year</h3>
        <ul class="anim--enter stone">
          <li class="mb-4">
            <h2 class="mb-0 link steinbeck">
              <n-link to = '/2019'>• 2019 Albums of the Year</n-link>
            </h2>
            <h3 class="link canela op-5"><a href="#">Listen to the Playlist</a></h3>
          </li>

          <li class="mb-9">
            <h2 class="mb-0 link steinbeck">• 2018 Albums of the Year</h2>
            <h3 class="link canela op-5"><a href="#">Listen to the Playlist</a></h3>
          </li>
        </ul>

        <Logotype
          class = "anim--enter outline--stone"
          style = "fill: var(--infrared);"
          title = 'aoty'
        />
      </section>
    </main>


  </div>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '~/assets/grid.scss';

  main {
    display: flex;
    flex-direction: column;
    padding: 11.2rem 0;
    @include breakpoint(md) { flex-direction: row; }
  }

  header {
    @include breakpoint(md) {
      width: grid-width(7);
    }
  }

  section {
    @include breakpoint(md) {
      margin-left: grid-width(1);
      width: grid-width(4);
    }
  }

  .logotype {
    margin: 0 auto;
    @include breakpoint(md) { margin: inherit; }
  }

  .sm { display: inline; @include breakpoint(md) { display: none; }}
  .not-sm { display: none; @include breakpoint(md) { display: inline; }}

</style>


<!-- logic -->
<script>
  import { animateEnter, fadeIn } from '~/logic/animate.js'
  import Navigation from '~/components/Navigation'
  import Logotype from '~/components/Logotype'

  export default {
    head() { return { title: "AOTY – Our Favorite Albums" }},

    beforeMount() {
      document.body.style.background = 'var(--gravity)'
    },

    mounted() {
      animateEnter()
      fadeIn()
    },

    beforeDestroy() {
      // const all = document.querySelector('main')
      // all.style.opacity = 0
      // all.style.transition = 'opacity 300ms ease'
      this.$refs.all.style.opacity = 0
      this.$refs.all.style.transition = 'opacity 300ms ease'
    },

    components: { Navigation, Logotype }

  }
</script>
