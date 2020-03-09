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
      <template v-slot:right>Caleb</template>
    </Navigation>


    <header id="fixed" class="pt-9">
      <Logotype
        class = "anim--enter outline--infrared"
        style = "fill: var(--gravity); transform: scale(.72)"
        title = 'Caleb'
      />

      <img ref='avatar' class="avatar" src="~/static/img/avatars/caleb.jpg" alt="caleb">
    </header>

    <main class="width">
      <ul>
        <li class="anim--enter">
          <div class="imgs">
            <img class="five" src="~/static/img/caleb/blawan/01.jpg" alt="">
            <img class="five" src="~/static/img/caleb/blawan/01.jpg" alt="">
            <img class="five" src="~/static/img/caleb/blawan/02.jpg" alt="">
            <img class="five" src="~/static/img/caleb/blawan/02.jpg" alt="">
            <img class="five" src="~/static/img/caleb/blawan/03.jpg" alt="">
            <img class="five" src="~/static/img/caleb/blawan/03.jpg" alt="">
            <img class="five" src="~/static/img/caleb/blawan/04.jpg" alt="">
            <img class="five" src="~/static/img/caleb/blawan/04.jpg" alt="">
          </div>
          <ListItem
            kicker = '05'
            title = "blawan–Many Many Pings"
            subtitle = "Many Many Pings by blawan—Electronic"
          />
        </li>

        <li class="anim--enter">
          <div class="imgs">
            <img class="four" src="~/static/img/caleb/crush/01.jpg" alt="">
            <img class="four" src="~/static/img/caleb/crush/01.jpg" alt="">
            <img class="four" src="~/static/img/caleb/crush/02.jpg" alt="">
            <img class="four" src="~/static/img/caleb/crush/02.jpg" alt="">
            <img class="four" src="~/static/img/caleb/crush/03.jpg" alt="">
            <img class="four" src="~/static/img/caleb/crush/03.jpg" alt="">
            <img class="four" src="~/static/img/caleb/crush/04.jpg" alt="">
            <img class="four" src="~/static/img/caleb/crush/04.jpg" alt="">
          </div>
          <ListItem
            kicker = '04'
            title = 'Floating Points—Crush'
            subtitle = 'Crush by Floating Points—Electronic'
          />
        </li>

        <li class="anim--enter">
          <div class="imgs">
            <img class="three" src="~/static/img/caleb/daphni/01.jpg" alt="">
            <img class="three" src="~/static/img/caleb/daphni/01.jpg" alt="">
            <img class="three" src="~/static/img/caleb/daphni/02.jpg" alt="">
            <img class="three" src="~/static/img/caleb/daphni/02.jpg" alt="">
            <img class="three" src="~/static/img/caleb/daphni/03.jpg" alt="">
            <img class="three" src="~/static/img/caleb/daphni/03.jpg" alt="">
            <img class="three" src="~/static/img/caleb/daphni/04.jpg" alt="">
            <img class="three" src="~/static/img/caleb/daphni/04.jpg" alt="">
          </div>
          <ListItem
            kicker = '03'
            title = 'Daphni—Sizzling EP'
            subtitle = 'Sizzling EP by Daphni—Electronic'
          />
        </li>

        <li class="anim--enter">
         <div class="imgs">
            <img class="two" src="~/static/img/caleb/sophie/01.jpg" alt="">
            <img class="two" src="~/static/img/caleb/sophie/01.jpg" alt="">
            <img class="two" src="~/static/img/caleb/sophie/02.jpg" alt="">
            <img class="two" src="~/static/img/caleb/sophie/02.jpg" alt="">
            <img class="two" src="~/static/img/caleb/sophie/03.jpg" alt="">
            <img class="two" src="~/static/img/caleb/sophie/03.jpg" alt="">
            <img class="two" src="~/static/img/caleb/sophie/04.jpg" alt="">
            <img class="two" src="~/static/img/caleb/sophie/04.jpg" alt="">
          </div>
          <ListItem
            kicker = '02'
            title = "SOPHIE—Oil of Every Pearl's Un-Insides"
            subtitle = "Oil of Every Pearl's Un-Insides by SOPHIE—Avant Pop"
          />
        </li>

        <li class="anim--enter">
         <div class="imgs">
            <img class="one" src="~/static/img/caleb/sandy/01.jpg" alt="">
            <img class="one" src="~/static/img/caleb/sandy/01.jpg" alt="">
            <img class="one" src="~/static/img/caleb/sandy/02.jpg" alt="">
            <img class="one" src="~/static/img/caleb/sandy/02.jpg" alt="">
            <img class="one" src="~/static/img/caleb/sandy/03.jpg" alt="">
            <img class="one" src="~/static/img/caleb/sandy/03.jpg" alt="">
            <img class="one" src="~/static/img/caleb/sandy/04.jpg" alt="">
            <img class="one" src="~/static/img/caleb/sandy/04.jpg" alt="">
          </div>
          <ListItem
            kicker = '01'
            title = '(Sandy) Alex G—House of Sugar'
            subtitle = 'House of Sugar by (Sandy) Alex G—Pop'
          />
        </li>
      </ul>

      <section class="fuzzys"/>

      <n-link to = './chad'>
        <Next
          kicker = 'Playing Next'
          title = "Chad's Top 5"
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
    head() { return { title: "AOTY – Caleb's List" }},

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
