<!-- layout -->
<template>
  <div class="index-wrapper width stone">

    <nav class="stone">
      <div class="op-0 nav--left steinbeck">
        <n-link to = '/'>AOTY</n-link>
      </div>
      <div class="nav--title tac canela">Albums <span>of the</span> YEAR</div>
      <div class="op-0 nav--right tar steinbeck">2019</div>
    </nav>

    <main>
      <header class="header mb-5">
        <h2 class="anim--enter headline infrared mb-3">My Intro to Let You Know</h2>
        <p class="anim--enter display mb-4">Albums of the Year is a communal project built around music & friendship established in 2018.</p>
        <p class="anim--enter display mb-4">To catalog the sonic mastery that is music, myself and a group of friends want to share our favorites with you.</p>
        <p class="anim--enter display mb-2">This site was designed and built by me, <a href="https://twitter.com/cmykw_" target="_blank" class="link">Matt</a>. Get started by selecting a year <span class="sm">below</span><span class="not-sm">to the right</span>, or travel <n-link class="link" to = '/2019'>back to 2019</n-link> 🤙🏼.</p>
      </header>

      <aside class="mb-3">
        <header>
          <h2 class="anim--enter headline infrared mb-3">Years of Albums</h2>
        </header>

        <ul>
          <li class="anim--enter mb-4">
            <n-link to = '/2019' class="link body">• 2019 Albums of the Year</n-link>
            <a class="link steinbeck op-5" href="" target="_blank">Listen to the Playlist</a>
          </li>

          <li class="anim--enter mb-2">
            <n-link to = '/' class="link body">• 2018 Albums of the Year</n-link>
            <a class="link steinbeck op-5" href="" target="_blank">Listen to the Playlist</a>
          </li>
        </ul>

        <LogotypeW
          class = "anim--enter"
          title = 'aoty'
        />
      </aside>
    </main>

  </div>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '~/assets/grid.scss';

  nav {
    margin: 2.4rem 0 3.2rem;
    @include breakpoint(md) { margin: 3.2rem 0 11.2rem; }
  }

  main {
    display: flex;
    flex-direction: column;
    @include breakpoint(md) { flex-direction: row; }
  }

  header {
    @include breakpoint(md) { width: grid-width(7); }
    // p + p { text-indent: 2ch; }
  }

  aside {
    position: relative;
    flex-direction: column;

    @include breakpoint(md) {
      margin-left: grid-width(1);
      width: grid-width(4);
    }
  }

  li {
    display: flex;
    flex-direction: column;
  }

  .sm { display: inline; @include breakpoint(md) { display: none; }}
  .not-sm { display: none; @include breakpoint(md) { display: inline; }}

  .logotype {
    // margin: 9.6rem 0 0 9.6rem;
    position: absolute;
    z-index: var(--z3);
    right: -28%;
    transform: translateY(4rem);
  }

</style>


<!-- logic -->
<script>
  import { scrolling } from '~/logic/forApp.js'
  import LogotypeW from '~/components/LogotypeW'

  export default {
    beforeMount() {
      document.body.style.background = 'var(--gravity)'
    },

    mounted() {
      // smooth scrolling
      // scrolling()
      // enter animation
      gsap.from('.anim--enter', {
        opacity: 0,
        y: 200,
        skewY: 10,
        stagger: .075,
        duration: 1,
        ease: Power2.easeInOut
      })
    },

    beforeDestroy() {
      // document.body.style.background = 'var(--stone)'
    },

    components: { LogotypeW, }
  }
</script>
