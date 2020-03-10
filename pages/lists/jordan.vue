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
      <template v-slot:right>Jordan</template>
    </Navigation>


    <header id="fixed" class="pt-9">
      <Logotype
        class = "anim--enter outline--infrared"
        style = "fill: var(--gravity); transform: scale(.72)"
        title = 'Jordan'
      />

      <img ref='avatar' class="avatar" src="~/static/img/avatars/jordan.jpg" alt="jordan">
    </header>

    <main class="width">
      <ul>
        <li class="anim--enter">
          <div class="imgs">
            <img class="five" src="~/static/img/jordan/bridges/01.jpg" alt="">
            <img class="five" src="~/static/img/jordan/bridges/01.jpg" alt="">
            <img class="five" src="~/static/img/jordan/bridges/02.png" alt="">
            <img class="five" src="~/static/img/jordan/bridges/02.png" alt="">
            <img class="five" src="~/static/img/jordan/bridges/03.png" alt="">
            <img class="five" src="~/static/img/jordan/bridges/03.png" alt="">
            <img class="five" src="~/static/img/jordan/bridges/04.jpg" alt="">
            <img class="five" src="~/static/img/jordan/bridges/04.jpg" alt="">
          </div>
          <ListItem
            kicker = '05'
            title = 'Kiefer–Bridges'
            subtitle = 'Bridges by Kiefer—Jazz'
          />
        </li>

        <li class="anim--enter">
          <div class="imgs">
            <img class="four" src="~/static/img/jordan/lux/01.jpg" alt="">
            <img class="four" src="~/static/img/jordan/lux/01.jpg" alt="">
            <img class="four" src="~/static/img/jordan/lux/02.jpg" alt="">
            <img class="four" src="~/static/img/jordan/lux/02.jpg" alt="">
            <img class="four" src="~/static/img/jordan/lux/03.jpg" alt="">
            <img class="four" src="~/static/img/jordan/lux/03.jpg" alt="">
            <img class="four" src="~/static/img/jordan/lux/04.jpg" alt="">
            <img class="four" src="~/static/img/jordan/lux/04.jpg" alt="">
          </div>
          <ListItem
            kicker = '04'
            title = 'Karen O & Danger Mouse—Lux Prima'
            subtitle = 'Lux Prima by Karen O & Danger Mouse—Alternative'
          />
        </li>

        <li class="anim--enter">
          <div class="imgs">
            <img class="three" src="~/static/img/jordan/toro/01.jpg" alt="">
            <img class="three" src="~/static/img/jordan/toro/01.jpg" alt="">
            <img class="three" src="~/static/img/jordan/toro/02.jpg" alt="">
            <img class="three" src="~/static/img/jordan/toro/02.jpg" alt="">
            <img class="three" src="~/static/img/jordan/toro/03.jpg" alt="">
            <img class="three" src="~/static/img/jordan/toro/03.jpg" alt="">
            <img class="three" src="~/static/img/jordan/toro/04.jpg" alt="">
            <img class="three" src="~/static/img/jordan/toro/04.jpg" alt="">
          </div>
          <ListItem
            kicker = '03'
            title = 'Toro Y Moi—Outer Peace'
            subtitle = 'Outer Peace by Toro Y Moi—Indie'
          />
        </li>

        <li class="anim--enter">
         <div class="imgs">
            <img class="two" src="~/static/img/jordan/bandana/01.jpg" alt="">
            <img class="two" src="~/static/img/jordan/bandana/01.jpg" alt="">
            <img class="two" src="~/static/img/jordan/bandana/02.jpg" alt="">
            <img class="two" src="~/static/img/jordan/bandana/02.jpg" alt="">
            <img class="two" src="~/static/img/jordan/bandana/03.jpg" alt="">
            <img class="two" src="~/static/img/jordan/bandana/03.jpg" alt="">
            <img class="two" src="~/static/img/jordan/bandana/04.jpg" alt="">
            <img class="two" src="~/static/img/jordan/bandana/04.jpg" alt="">
          </div>
          <ListItem
            kicker = '02'
            title = 'Freddie Gibbs & Madlib—Bandana'
            subtitle = 'Bandana by Freddie Gibbs & Madlib—Hip-Hop'
          />
        </li>

        <li class="anim--enter">
         <div class="imgs">
            <img class="one" src="~/static/img/jordan/lee/01.jpg" alt="">
            <img class="one" src="~/static/img/jordan/lee/01.jpg" alt="">
            <img class="one" src="~/static/img/jordan/lee/02.jpg" alt="">
            <img class="one" src="~/static/img/jordan/lee/02.jpg" alt="">
            <img class="one" src="~/static/img/jordan/lee/03.jpg" alt="">
            <img class="one" src="~/static/img/jordan/lee/03.jpg" alt="">
            <img class="one" src="~/static/img/jordan/lee/04.jpg" alt="">
            <img class="one" src="~/static/img/jordan/lee/04.jpg" alt="">
          </div>
          <ListItem
            kicker = '01'
            title = 'Lee Fields & The Expressions—It Rains Love'
            subtitle = 'It Rains Love by Lee Fields & The Expressions—Soul'
          />
        </li>
      </ul>

      <section class="fuzzys"/>

      <n-link to = './kristie'>
        <Next
          kicker = 'Playing Next'
          title = "Kristie's Top 5"
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
    head() { return { title: "AOTY – Jordan's List" }},

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
