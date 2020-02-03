<!-- layout -->
<template>
  <div class="index-wrapper width stone">

    <nav class="stone">
      <div class="nav--left steinbeck">
        <n-link to = '/'>AOTY</n-link>
      </div>
      <div class="nav--title tac canela">Albums <span>of the</span> YEAR</div>
      <div class="nav--right tar steinbeck">2019</div>
    </nav>

    <main>
      <section>
        <header class="anim--enter mb-5">
          <h2 class="headline infrared mb-3">About</h2>
          <h1 class="display">2019 Albums of the Year is a communal project built around music & friendship.</h1>
        </header>

        <LogotypeW
          class = "anim--enter"
          title = '2019'
        />
      </section>

      <article class="anim--enter mb-8">
        <p class="body">2019 was a great year for music. To catalog this period of sonic mastery, myself and a group of friends want to share our favorites with you. This site was designed and built by me, <a class="link" href="https://twitter.com/cmykw_" target="_blank">Matt</a> – and you can view the source <a class="link" href="https://github.com/ohiosveryown/ourfavoritealbums-2019" target="_blank">here</a>.</p>
        <p class="body">The site is built on vue, nuxtjs and friendship. The type is set in Respira by Sharp Type and Steinbeck by The Temporary State.</p>
      </article>

      <article class="anim--enter mb-4">
        <h2 class="headline infrared mb-3">The Compendium Playlist</h2>
        <p class="mb-4 body">Crafted by selecting the favorite song from each individual's favorite album, the compilation playlist is your tl:dr for Our Favorite Albums.</p>
        <iframe src="https://open.spotify.com/embed/playlist/51W4U61e2M9WDHSYvhHche" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </article>
    </main>

    <aside class="anim--enter">
      <h3 class="headline infrared mb-3">All Lists</h3>

      <li class="mb-3">
        <nuxt-link to = '/lists/matt'><h2 class="mb-0 content-width respira">Matt's Top 5 Albums</h2></nuxt-link>
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

  nav {
    margin: 2.4rem 0 3.2rem;
    @include breakpoint(md) { margin: 3.2rem 0 11.2rem; }
  }

  section {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 8rem;

    .logotype { position: relative; z-index: var(--z3); margin: 0 auto 3.2rem; }

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

  p, iframe {
    @include breakpoint(md)  { width: grid-width(8); }
    @include breakpoint(mdl) { width: grid-width(5); }
  }

  p + p { text-indent: 4ch; }

  aside {
    margin-bottom: 8rem;

    @include breakpoint(mdl) {
       margin: 0 0 0 grid-width(7);
       transform: translateY(-40rem);
    }

    h2 {
      font-size: 1.8rem;
      @include breakpoint(md) { font-size: 3.2rem; }
    }

    a {
      text-decoration: underline;
      @include breakpoint(md) { &:hover { text-decoration: line-through; }}
    }
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

      // scrolling()

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
