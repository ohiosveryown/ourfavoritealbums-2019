<!-- layout -->
<template>
  <div class="index--wrapper width">


    <Navigation class="stone">
      <template v-slot:left>20</template>
      <template v-slot:center>
        <n-link to = '/'>Albums <span class="italic">of the</span> Year</n-link>
      </template>
      <template v-slot:right>19</template>
    </Navigation>


    <main>
      <header class="stone">
        <article>
          <h3 class="anim--enter headline infrared mb-1">Intro</h3>
          <h1 class="anim--enter display stone mb-4">The second installment of “Our Favorite Albums”, built on friendship & code.</h1>
          <h2 class="anim--enter body stone">2019 was a great year for music. To catalog this period of sonic mastery, myself and a group of friends want to share our favorites with you. This site was designed and built by me, <a href="https://twitter.com/cmykw_" target="_blank" class="link">Matt</a> – and you can view the source <a class="link" target="_blank" href="https://github.com/ohiosveryown/ourfavoritealbums-2019">here</a>.</h2>
          <h2 class="anim--enter body stone mb-4">The site is built on vue, nuxt and friendship. The type is set in Respira by Sharp Type, Steinbeck by The Temporary State and Canela by Commerical Type
            <div class="wrapper">
              <span class="keyword">(three faces??!)</span>
              <figure class="kobe"></figure>
            </div>
          </h2>

          <h3 class="anim--enter playlist headline infrared mb-1">The Compendium Playlist</h3>
          <h2 class="anim--enter playlist mb-4 body stone">Crafted by selecting the favorite song from each individual's favorite album, the compilation playlist is your tl:dr for Our Favorite Albums.</h2>
          <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1E9JGyJApmKNfx" height="240" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </article>

        <section class="header--right">
          <Logotype
            class = "anim--enter outline--stone"
            style = "fill: var(--infrared);"
            title = '2019'
          />

          <Avatar/>
        </section>

      </header>
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

  article, iframe {
    @include breakpoint(md) {
      margin-right: grid-width(1);
      width: grid-width(8);

      h2 { width: grid-width(8); }
    }
  }

  h2 + h2 { text-indent: 3ch; }

  .playlist, iframe {
    display: none;
    @include breakpoint(mdl) { display: inherit; }
  }

  .wrapper { display: inline; position: relative; }

  span.keyword {
    display: inline;
    position: relative;
    overflow: hidden;
    @include breakpoint(md) { text-decoration: underline; }
  }

  span.keyword:hover ~ figure {
    @include breakpoint(md) {
      opacity: 1;
      transform: translate(-50%,-50%) scale(1);
      transition: all 100ms var(--inout);
    }
  }

  figure {
    display: inline;
    position: absolute;
    z-index: var(--zmin);
    top: 50%; left: 50%;
    opacity: 0;
    transform: translate(-50%,-50%) scale(0.94);
    transition: all 150ms ease;
    will-change: transform;
  }

  figure.kobe {
    width: 320px; height: 180px;
    background: url('../static/img/kobe.gif') no-repeat center center;
    background-blend-mode: soft-light;
    background-size: cover;
  }

  .header--right {
    display: flex;
    flex-direction: column;
  }

  .logotype {
    margin: 0 auto 4.8rem;
    @include breakpoint(md) { margin: auto auto 6.4rem; }
  }

  .list--header, ul {
    @include breakpoint(mdl) { margin-left: grid-width(-5); }
  }

</style>


<!-- logic -->
<script>
  import { animateEnter } from '~/logic/animate.js'
  import Navigation from '~/components/Navigation'
  import Logotype from '~/components/Logotype'
  import Avatar from '~/components/Avatar'

  export default {

    beforeMount() {
      document.body.style.background = 'var(--gravity)'
    },

    mounted() {
      animateEnter()
    },

    components: { Navigation, Logotype, Avatar }

  }
</script>
