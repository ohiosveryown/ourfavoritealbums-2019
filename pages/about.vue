<!-- layout -->
<template>
  <div class="width">
    <main>
      <section>
        <Header
          class = "header mb-5"
          kicker = 'About'
          title = '2019 Albums of the Year is a communal project built around music & friendship.'
        />

        <Logotype
          title = '2019'
        />
      </section>

      <article class="mb-4">
        <p class="body">2019 was a great year for music. To catalog this period of sonic mastery, myself and a group of friends want to share our favorites with you. This site was designed and built by me, Matt – and you can view the source here.</p>
        <p class="body">The site is built on vue, saber and friendship. The type is set in Respira by Sharp Type and Steinbeck by The Temporary State.</p>
      </article>
    </main>

    <aside>
      <h2 class="headline mb-2">Album List</h2>
      <ul class="respira">
        <nuxt-link to = '/'>
          <li>2019 Albums of the Year</li>
        </nuxt-link>

        <nuxt-link to = '/'>
          <li>2018 Albums of the Year</li>
        </nuxt-link>
      </ul>
    </aside>
  </div>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '~/assets/grid.scss';

  section {
    display: flex;
    justify-content: space-between;
    @include breakpoint(md) {
      margin-top: 11.2rem;
      .logotype { transform: translateY(18rem); }
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

  p + p { text-indent: 4ch; }

  aside {
    @include breakpoint(md) {
      margin-left: grid-width(8);
      width: grid-width(4);
    }
  }

  h2 {  color: var(--infrared); }

  li {
    margin-bottom: 2.4rem;
    text-decoration: underline;

    @include breakpoint(md) {
      font-size: 2.4rem;
      &:hover { text-decoration: line-through; }
    }
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
