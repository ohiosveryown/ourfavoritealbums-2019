<!-- layout -->
<template>
  <div id="luxy" class="about-wrapper width">

    <nav class="mt-4 stone">
      <div class="nav--left steinbeck">
        <!-- <n-link to = '/'>
          <svg width="24" height="24">
            <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 .75C5.787.75.75 5.787.75 12S5.787 23.25 12 23.25 23.25 18.213 23.25 12 18.213.75 12 .75zM12 10a2 2 0 110 4 2 2 0 010-4zm0 .75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fill="#FFF" fill-rule="nonzero"/>
          </svg>
        </n-link> -->
        <n-link to = '/'>AOTY</n-link>
      </div>
      <div class="nav--title tac canela">Albums <span>of the</span> YEAR</div>
      <div class="nav--right tar steinbeck">2019</div>
    </nav>

    <main>
      <section>
        <Header
          class = "gsap header stone mb-5"
          kicker = 'About'
          title = '2019 Albums of the Year is a communal project built around music & friendship.'
        />

        <LogotypeW
          class = "gsap"
          title = '2019'
        />
      </section>

      <article class="stone gsap mb-4">
        <p @click = "$router.push({ path: '/' })" class="body">2019 was a great year for music. To catalog this period of sonic mastery, myself and a group of friends want to share our favorites with you. This site was designed and built by me, <a class="link" href="https://twitter.com/cmykw_" target="_blank">Matt</a> – and you can view the source <a class="link" href="https://github.com/ohiosveryown/ourfavoritealbums-2019" target="_blank">here</a>.</p>
        <p class="body">The site is built on vue, nuxtjs and friendship. The type is set in Respira by Sharp Type and Steinbeck by The Temporary State.</p>
      </article>
    </main>

    <aside class="gsap stone">
      <h3 class="headline infrared mb-3">Albums Lists</h3>

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
    @include breakpoint(mdl) { margin: 0 0 12rem grid-width(7); }

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
  import Header from '~/components/Header'
  import Logotype from '~/components/Logotype'
  import LogotypeW from '~/components/LogotypeW'

  export default {
    components: { Header, Logotype, LogotypeW },

    mounted() {
      document.body.style.background = 'var(--gravity)'

      gsap.from('.gsap', {
        opacity: 0,
        y: 200,
        skewY: 10,
        stagger: .075,
        duration: 1,
        // delay: .7,
        ease: Power2.easeInOut
      })
    },

    beforeDestroy() {
      document.body.style.background = 'var(--stone)'
    }
  }
</script>
