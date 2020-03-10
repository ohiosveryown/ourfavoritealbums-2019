<!-- layout -->
<template>
  <div class="list--wrapper">

    <Navigation class="anim--fade-in gravity">
      <template v-slot:left>
        <n-link to = '/2019'>Lists</n-link>
      </template>
      <template v-slot:center>
        <n-link to = '/2019'>Albums <span class="italic">of the</span> Year</n-link>
      </template>
      <template v-slot:right>Roy</template>
    </Navigation>


    <header id="fixed" class="pt-9">
      <Logotype
        class = "anim--enter outline--infrared"
        style = "fill: var(--gravity); transform: scale(.72)"
        title = 'Roy'
      />

      <img ref='avatar' class="avatar" src="~/static/img/avatars/roy.jpg" alt="roy">
    </header>

    <main class="width">
      <ul>
        <li class="anim--enter">
          <div class="imgs">
            <img class="five" src="~/static/img/roy/solange/01.jpg" alt="">
            <img class="five" src="~/static/img/roy/solange/01.jpg" alt="">
            <img class="five" src="~/static/img/roy/solange/02.jpg" alt="">
            <img class="five" src="~/static/img/roy/solange/02.jpg" alt="">
            <img class="five" src="~/static/img/roy/solange/03.jpg" alt="">
            <img class="five" src="~/static/img/roy/solange/03.jpg" alt="">
            <img class="five" src="~/static/img/roy/solange/04.png" alt="">
            <img class="five" src="~/static/img/roy/solange/04.png" alt="">
          </div>
          <ListItem
            kicker = '05'
            title = 'Solange—When I Get Home'
            subtitle = 'When I Get Home by Solange—R&B'
          />
        </li>

        <li class="anim--enter">
          <div class="imgs">
            <img class="four" src="~/static/img/roy/dza/01.jpg" alt="">
            <img class="four" src="~/static/img/roy/dza/01.jpg" alt="">
            <img class="four" src="~/static/img/roy/dza/02.jpg" alt="">
            <img class="four" src="~/static/img/roy/dza/02.jpg" alt="">
            <img class="four" src="~/static/img/roy/dza/03.jpg" alt="">
            <img class="four" src="~/static/img/roy/dza/03.jpg" alt="">
            <img class="four" src="~/static/img/roy/dza/04.jpg" alt="">
            <img class="four" src="~/static/img/roy/dza/04.jpg" alt="">
          </div>
          <ListItem
            kicker = '04'
            title = 'Smoke DZA—Baconeggandtrees'
            subtitle = 'Baconeggandtrees by Smoke DZA—Alternative'
          />
        </li>

        <li class="anim--enter">
          <div class="imgs">
            <img class="three" src="~/static/img/roy/ari/01.jpg" alt="">
            <img class="three" src="~/static/img/roy/ari/01.jpg" alt="">
            <img class="three" src="~/static/img/roy/ari/02.png" alt="">
            <img class="three" src="~/static/img/roy/ari/02.png" alt="">
            <img class="three" src="~/static/img/roy/ari/03.jpg" alt="">
            <img class="three" src="~/static/img/roy/ari/03.jpg" alt="">
            <img class="three" src="~/static/img/roy/ari/04.jpg" alt="">
            <img class="three" src="~/static/img/roy/ari/04.jpg" alt="">
          </div>
          <ListItem
            kicker = '03'
            title = "Ari Lennox—Shea Butter Baby"
            subtitle = "Shea Butter Baby by Ari Lennox—R&B"
          />
        </li>

        <li class="anim--enter">
          <div class="imgs">
            <img class="two" src="~/static/img/roy/larry/01.jpg" alt="">
            <img class="two" src="~/static/img/roy/larry/01.jpg" alt="">
            <img class="two" src="~/static/img/roy/larry/02.jpg" alt="">
            <img class="two" src="~/static/img/roy/larry/02.jpg" alt="">
            <img class="two" src="~/static/img/roy/larry/03.jpg" alt="">
            <img class="two" src="~/static/img/roy/larry/03.jpg" alt="">
            <img class="two" src="~/static/img/roy/larry/04.jpg" alt="">
            <img class="two" src="~/static/img/roy/larry/04.jpg" alt="">
          </div>
          <ListItem
            kicker = '02'
            title = 'Larry June—Out the Trunk'
            subtitle = 'Out the Trunk by Larry June—Hip Hop'
          />
        </li>

        <li class="anim--enter">
         <div class="imgs">
            <img class="one" src="~/static/img/jordan/bandana/01.jpg" alt="">
            <img class="one" src="~/static/img/jordan/bandana/01.jpg" alt="">
            <img class="one" src="~/static/img/jordan/bandana/02.jpg" alt="">
            <img class="one" src="~/static/img/jordan/bandana/02.jpg" alt="">
            <img class="one" src="~/static/img/jordan/bandana/03.jpg" alt="">
            <img class="one" src="~/static/img/jordan/bandana/03.jpg" alt="">
            <img class="one" src="~/static/img/jordan/bandana/04.jpg" alt="">
            <img class="one" src="~/static/img/jordan/bandana/04.jpg" alt="">
          </div>
          <ListItem
            kicker = '01'
            title = 'Freddie Gibbs & Madlib—Bandana'
            subtitle = 'Bandana by Freddie Gibbs & Madlib—Hip-Hop'
          />
        </li>
      </ul>

      <section class="fuzzys"/>

      <n-link to = './matt'>
        <Next
          kicker = 'Playing Next'
          title = "Matt's Top 5"
        />
      </n-link>
    </main>

    <n-link to = '/2019'>
      <footer class="tac respira link">View All Lists</footer>
    </n-link>

  </div>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '~/assets/grid.scss';



</style>


<!-- logic -->
<script>
  import { animateEnter, fadeIn, listItemLogic } from '~/logic/animate.js'
  import Navigation from '~/components/Navigation'
  import Logotype from '~/components/Logotype'
  import ListItem from '~/components/ListItem'
  import Next from '~/components/Next'


  export default {
    head() { return { title: "AOTY – Roy's List" }},

    components: { Navigation, Logotype, ListItem, Next },
    layout: 'list',

    beforeMount() {
      // document.body.style.background = 'var(--gravity)'
    },

    mounted() {
      animateEnter()
      fadeIn()
      listItemLogic()

      // logotype / avatar hover follow
      const avatar = document.querySelector('.avatar')
      document.addEventListener('mousemove', (e) => {
        avatar.setAttribute(
          'style',
          `transform: translate(${e.pageX - 100}px, ${e.pageY - 100}px);`
        )
      })
    },

  }
</script>
