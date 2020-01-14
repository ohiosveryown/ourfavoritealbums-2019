<!-- layout -->
<template>
  <div class="width">
    <main>
      <section>
        <Header
          class = "gsap header mb-5"
          kicker = 'About'
          title = '2019 Albums of the Year is a communal project built around music & friendship.'
        />

        <Logotype
          class = "fadein"
          title = '2019'
        />
      </section>

      <article class="fadein mb-4">
        <p class="body">2019 was a great year for music. To catalog this period of sonic mastery, myself and a group of friends want to share our favorites with you. This site was designed and built by me, Matt – and you can view the source here.</p>
        <p class="body">The site is built on vue, nuxtjs and friendship. The type is set in Respira by Sharp Type and Steinbeck by The Temporary State.</p>
      </article>
    </main>

    <aside>
      <h3 class="headline infrared mb-3">Albums Lists</h3>

      <li class="mb-3">
        <nuxt-link to = '/'><h2 class="mb-0 content-width respira">Matt's Top 5 Albums</h2></nuxt-link>
        <a
          class="steinbeck op-5"
          href="https://twitter.com/cmykw_"
          target="_blank">
          @cmykw_
        </a>
      </li>

      <li class="mb-3">
        <nuxt-link to = '/'><h2 class="mb-0 content-width respira">Caleb's Top 5 Albums</h2></nuxt-link>
        <a
          class="steinbeck op-5"
          href="https://www.instagram.com/calebb"
          target="_blank">
          @calebb
        </a>
      </li>

      <li class="mb-3">
        <nuxt-link to = '/'><h2 class="mb-0 content-width respira">Chad's Top 5 Albums</h2></nuxt-link>
        <a
          class="steinbeck op-5"
          href="https://twitter.com/chadurbanick"
          target="_blank">
          @chadurbanick
        </a>
      </li>

      <li class="mb-3">
        <nuxt-link to = '/'><h2 class="mb-0 content-width respira">Jordan's Top 5 Albums</h2></nuxt-link>
        <a
          class="steinbeck op-5"
          href="https://jordanjung.com"
          target="_blank">
          jordanjung.com
        </a>
      </li>

      <li class="mb-3">
        <nuxt-link to = '/'><h2 class="mb-0 content-width respira">Kristie's Top 5 Albums</h2></nuxt-link>
        <a
          class="steinbeck op-5"
          href="https://www.instagram.com/kristiefeltner"
          target="_blank">
          @kristiefeltner
        </a>
      </li>

      <li class="mb-3">
        <nuxt-link to = '/'><h2 class="mb-0 content-width respira">Mirely's Top 5 Albums</h2></nuxt-link>
        <a
          class="steinbeck op-5"
          href="https://www.instagram.com/mirelycab"
          target="_blank">
          @mirelycab
        </a>
      </li>

      <li class="mb-3">
        <nuxt-link to = '/'><h2 class="mb-0 content-width respira">Roy's Top 5 Albums</h2></nuxt-link>
        <a
          class="steinbeck op-5"
          href="https://www.instagram.com/Old_Orleans"
          target="_blank">
          @Old_Orleans
        </a>
      </li>

    </aside>

  </div>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '~/assets/grid.scss';

  section {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 8rem;
    .logotype { margin: 0 auto 3.2rem; }

    @include breakpoint(md) {
      flex-direction: row;
      justify-content: space-between;
      margin-top: 11.2rem;
      .logotype { margin: 0; transform: translateY(14rem); }
    }

    @include breakpoint(mdl) { .logotype { transform: translateY(18rem); }}
  }

  header {
    @include breakpoint(md)  { width: grid-width(6); }
    @include breakpoint(mdl) { width: grid-width(8); }
  }

  p {
    @include breakpoint(md)  { width: grid-width(8); }
    @include breakpoint(mdl) { width: grid-width(5); }
  }

  p + p { text-indent: 4ch; }

  // aside
  aside {
    margin-bottom: 8rem;
    @include breakpoint(md) { margin: 0 0 12rem grid-width(7); }
    @include breakpoint(mdl) { margin: 0 0 12rem grid-width(8); }

    h2 {
      font-size: 1.8rem;
      @include breakpoint(md) { font-size: 2.4rem; }
    }

    a {
      text-decoration: underline;
      @include breakpoint(md) { &:hover { text-decoration: line-through; }}
    }
  }

</style>


<!-- logic -->
<script>
  import Header from '~/components/Header'
  import Logotype from '~/components/Logotype'

  import anime from 'animejs/lib/anime.es.js'

  export default {
    components: { Header, Logotype, },
    mounted() {
      anime({
        targets: '.gsap',
        opacity: [0,1],
        translateY: [150,0],
        skewY: [10,0],
        easing: 'cubicBezier(0.645, 0.045, 0.355, 1)',
        duration: 800,
        delay: anime.stagger(200)
      })

      anime({
        targets: '.fadein',
        opacity: [0,1],
        easing: 'cubicBezier(0.645, 0.045, 0.355, 1)',
        duration: 800,
        delay: 400,
      })
    }
  }
</script>
