<!-- layout -->
<template>
    <div class="debug index-wrapper width">

    <nav class="mt-4 stone">
      <div class="nav--title tac canela">Albums <span>of the</span> YEAR</div>
    </nav>

    <main class="mt-5">
      <header class="gsap header stone mb-5">
        <h2 class="headline infrared mb-3">My Intro to Let You Know</h2>
        <p class="display mb-4">Albums of the Year is a communal project built around music & friendship established in 2018.</p>
        <p class="display">To catalog the sonic mastery that is music, myself and a group of friends want to share our favorites with you. This site was designed and built by me, <a href="https://twitter.com/cmykw_" target="_blank" class="link">Matt</a>. Get started by selecting a year to the right 🤙🏼.</p>
      </header>

      <aside class="debug stone">
        <header>
          <h2 class="headline infrared mb-3">Years of Albums</h2>
        </header>
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
  }

  aside {
    @include breakpoint(md) {
      margin-left: grid-width(1);
      width: grid-width(4);
    }
  }

</style>


<!-- logic -->
<script>
  export default {
    mounted() {
      document.body.style.background = 'var(--gravity)'
    },

    beforeDestroy() {
      document.body.style.background = 'var(--stone)'
    },

    components: {  }
  }
</script>
