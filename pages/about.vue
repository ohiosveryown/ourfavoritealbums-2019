<!-- layout -->
<template>
  <main class="width">
    <section class="debug">
      <Header
        class = "header"
        kicker = 'About'
        title = '2019 Albums of the Year is a communal project built around music & friendship.'
      />

      <Logotype
        title = '2019'
      />
    </section>

    <article>
      <p class="body">2019 was a great year for music. To catalog this period of sonic mastery, myself and a group of friends want to share our favorites with you. This site was designed and built by me, Matt – and you can view the source here.</p>
      <p class="body">The site is built on vue, saber and friendship. The type is set in Respira by Sharp Type and Steinbeck by The Temporary State.</p>
    </article>
  </main>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '~/assets/grid.scss';

  section {
    display: flex;
    justify-content: space-between;
    @include breakpoint(md) {

    }
  }

  header {
    @include breakpoint(md) {
      width: grid-width(8);

    }
  }

  p {
    @include breakpoint(md) {
      width: grid-width(5);
    }
  }

  p + p {
    text-indent: 4ch;
  }

</style>


<!-- logic -->
<script>
  import Header from '~/components/Header'
  import Logotype from '~/components/Logotype'
  export default {
    components: { Header, Logotype }
  }
</script>
