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
            <img class="five" src="~/static/img/mirely/mac/01.png" alt="">
            <img class="five" src="~/static/img/mirely/mac/01.png" alt="">
            <img class="five" src="~/static/img/mirely/mac/02.jpg" alt="">
            <img class="five" src="~/static/img/mirely/mac/02.jpg" alt="">
            <img class="five" src="~/static/img/mirely/mac/03.png" alt="">
            <img class="five" src="~/static/img/mirely/mac/03.png" alt="">
            <img class="five" src="~/static/img/mirely/mac/04.jpg" alt="">
          </div>
          <ListItem
            kicker = '05'
            title = 'Mac DeMarco—Here Comes the Cowboy'
            subtitle = 'Here Comes the Cowboy by Mac DeMarco—Indie'
          />
        </li>

        <li class="anim--enter">
          <div class="imgs">
            <img class="four" src="~/static/img/mirely/jay/01.jpg" alt="">
            <img class="four" src="~/static/img/mirely/jay/01.jpg" alt="">
            <img class="four" src="~/static/img/mirely/jay/02.png" alt="">
            <img class="four" src="~/static/img/mirely/jay/02.png" alt="">
            <img class="four" src="~/static/img/mirely/jay/03.jpg" alt="">
            <img class="four" src="~/static/img/mirely/jay/03.jpg" alt="">
            <img class="four" src="~/static/img/mirely/jay/04.png" alt="">
            <img class="four" src="~/static/img/mirely/jay/04.png" alt="">
          </div>
          <ListItem
            kicker = '04'
            title = 'Jay Som—Anak Ko'
            subtitle = 'Anak Ko by Jay Som—Alternative'
          />
        </li>

        <li class="anim--enter">
          <div class="imgs">
            <img class="three" src="~/static/img/mirely/blood-orange/01.jpg" alt="">
            <img class="three" src="~/static/img/mirely/blood-orange/01.jpg" alt="">
            <img class="three" src="~/static/img/mirely/blood-orange/02.png" alt="">
            <img class="three" src="~/static/img/mirely/blood-orange/02.png" alt="">
            <img class="three" src="~/static/img/mirely/blood-orange/03.jpg" alt="">
            <img class="three" src="~/static/img/mirely/blood-orange/03.jpg" alt="">
            <img class="three" src="~/static/img/mirely/blood-orange/04.jpg" alt="">
            <img class="three" src="~/static/img/mirely/blood-orange/04.jpg" alt="">
          </div>
          <ListItem
            kicker = '03'
            title = "Blood Orange—Angel's Pulse"
            subtitle = "Angel's Pulse by Blood Orange—Alternative"
          />
        </li>

        <li class="anim--enter">
          <div class="imgs">
            <img class="two" src="~/static/img/mirely/anemone/01.jpg" alt="">
            <img class="two" src="~/static/img/mirely/anemone/01.jpg" alt="">
            <img class="two" src="~/static/img/mirely/anemone/02.jpg" alt="">
            <img class="two" src="~/static/img/mirely/anemone/02.jpg" alt="">
            <img class="two" src="~/static/img/mirely/anemone/03.jpg" alt="">
            <img class="two" src="~/static/img/mirely/anemone/03.jpg" alt="">
            <img class="two" src="~/static/img/mirely/anemone/04.jpg" alt="">
            <img class="two" src="~/static/img/mirely/anemone/04.jpg" alt="">
          </div>
          <ListItem
            kicker = '02'
            title = 'Anemone—Beat My Distance'
            subtitle = 'Beat My Distance by Anemone—Alternative'
          />
        </li>

        <li class="anim--enter">
          <div class="imgs">
            <img class="one" src="~/static/img/jordan/toro/01.jpg" alt="">
            <img class="one" src="~/static/img/jordan/toro/01.jpg" alt="">
            <img class="one" src="~/static/img/jordan/toro/02.jpg" alt="">
            <img class="one" src="~/static/img/jordan/toro/02.jpg" alt="">
            <img class="one" src="~/static/img/jordan/toro/03.jpg" alt="">
            <img class="one" src="~/static/img/jordan/toro/03.jpg" alt="">
            <img class="one" src="~/static/img/jordan/toro/04.jpg" alt="">
            <img class="one" src="~/static/img/jordan/toro/04.jpg" alt="">
          </div>
          <ListItem
            kicker = '01'
            title = 'Toro Y Moi—Outer Peace'
            subtitle = 'Outer Peace by Toro Y Moi—Indie'
          />
        </li>
      </ul>

      <section class="fuzzys"/>

      <n-link to = './roy'>
        <Next
          kicker = 'Playing Next'
          title = "Roy's Top 5"
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
