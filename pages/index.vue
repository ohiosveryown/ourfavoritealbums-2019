<!-- layout -->
<template>
  <div class="index-wrapper width">

    <nav class="mt-4 stone">
      <div class="nav--title tac canela">Albums <span>of the</span> YEAR</div>
    </nav>

    <main>
      <header class="header stone mb-5">
        <h2 class="gsap headline infrared mb-3">My Intro to Let You Know</h2>
        <p class="gsap display mb-4">Albums of the Year is a communal project built around music & friendship established in 2018.</p>
        <p class="gsap display mb-4">To catalog the sonic mastery that is music, myself and a group of friends want to share our favorites with you.</p>
        <p class="gsap display mb-2">This site was designed and built by me, <a href="https://twitter.com/cmykw_" target="_blank" class="link">Matt</a>. Get started by selecting a year <span class="sm">below</span><span class="not-sm">to the right</span>, or travel <n-link class="link" to = '/about'>back to 2019</n-link> 🤙🏼.</p>
      </header>

      <aside class="stone mb-3">
        <header>
          <h2 class="gsap headline infrared mb-3">Years of Albums</h2>
        </header>

        <ul>
          <li class="gsap mb-4">
            <n-link to = '/about' class="link body">• 2019 Albums of the Year</n-link>
            <a class="link steinbeck op-5" href="" target="_blank">Listen to the Playlist</a>
          </li>

          <li class="gsap mb-2">
            <n-link to = '/' class="link body">• 2018 Albums of the Year</n-link>
            <a class="link steinbeck op-5" href="" target="_blank">Listen to the Playlist</a>
          </li>
        </ul>
      </aside>

    </main>

  </div>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '~/assets/grid.scss';

  nav { align-items: center; }
  .nav--title { width: 100%; }

  main {
    display: flex;
    flex-direction: column;

    @include breakpoint(md) {
      flex-direction: row;
    }
  }

  header {
    @include breakpoint(md) { width: grid-width(7); }
    // p + p { text-indent: 2ch; }
    h2 { padding-top: 11.2rem; }
  }

  aside {
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

</style>


<!-- logic -->
<script>
  export default {
    mounted() {
      document.body.style.background = 'var(--gravity)'

      gsap.from('.gsap', {
        opacity: 0,
        y: 200,
        skewY: 10,
        stagger: .075,
        duration: 1,
        ease: Power2.easeInOut
      })
    },

    beforeDestroy() {
      document.body.style.background = 'var(--stone)'
    },

    components: {  }
  }
</script>
