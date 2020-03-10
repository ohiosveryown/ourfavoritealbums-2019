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
      <template v-slot:right>Mirely</template>
    </Navigation>


    <header id="fixed" class="pt-9">
      <Logotype
        class = "anim--enter outline--infrared"
        style = "fill: var(--gravity); transform: scale(.72)"
        title = 'Mirely'
      />

      <img ref='avatar' class="avatar" src="~/static/img/avatars/mirely2.jpg" alt="mirely">
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
            kicker = '03'
            title = 'Mac DeMarco—Here Comes the Cowboy'
            subtitle = 'Here Comes the Cowboy by Mac DeMarco—Indie'
          />
        </li>

        <li class="anim--enter">
          <div class="imgs">
            <img class="four" src="~/static/img/kristie/rex/01.jpg" alt="">
            <img class="four" src="~/static/img/kristie/rex/01.jpg" alt="">
            <img class="four" src="~/static/img/kristie/rex/02.png" alt="">
            <img class="four" src="~/static/img/kristie/rex/02.png" alt="">
            <img class="four" src="~/static/img/kristie/rex/03.gif" alt="">
            <img class="four" src="~/static/img/kristie/rex/03.gif" alt="">
            <img class="four" src="~/static/img/kristie/rex/04.jpg" alt="">
            <img class="four" src="~/static/img/kristie/rex/04.jpg" alt="">
          </div>
          <ListItem
            kicker = '04'
            title = 'Rex Orange County—Pony'
            subtitle = 'Pony by Rex Orange County—Alternative'
          />
        </li>

        <li class="anim--enter">
          <div class="imgs">
            <img class="three" src="~/static/img/kristie/doja/01.jpg" alt="">
            <img class="three" src="~/static/img/kristie/doja/01.jpg" alt="">
            <img class="three" src="~/static/img/kristie/doja/02.jpg" alt="">
            <img class="three" src="~/static/img/kristie/doja/02.jpg" alt="">
            <img class="three" src="~/static/img/kristie/doja/03.jpg" alt="">
            <img class="three" src="~/static/img/kristie/doja/03.jpg" alt="">
            <img class="three" src="~/static/img/kristie/doja/04.gif" alt="">
            <img class="three" src="~/static/img/kristie/doja/04.gif" alt="">
          </div>
          <ListItem
            kicker = '03'
            title = 'Doja Cat—Hot Pink'
            subtitle = 'Hot Pink by Doja Cat—R&B'
          />
        </li>

        <li class="anim--enter">
         <div class="imgs">
            <img class="two" src="~/static/img/kristie/maggie/01.jpg" alt="">
            <img class="two" src="~/static/img/kristie/maggie/01.jpg" alt="">
            <img class="two" src="~/static/img/kristie/maggie/02.png" alt="">
            <img class="two" src="~/static/img/kristie/maggie/02.png" alt="">
            <img class="two" src="~/static/img/kristie/maggie/03.jpg" alt="">
            <img class="two" src="~/static/img/kristie/maggie/03.jpg" alt="">
            <img class="two" src="~/static/img/kristie/maggie/04.jpg" alt="">
            <img class="two" src="~/static/img/kristie/maggie/04.jpg" alt="">
          </div>
          <ListItem
            kicker = '02'
            title = 'Maggie Rogers—Heard It In A Past Life'
            subtitle = 'Heard It In A Past Life by Maggie Rogers—Pop'
          />
        </li>

        <li class="anim--enter">
         <div class="imgs">
            <img class="one" src="~/static/img/kristie/james/01.jpg" alt="">
            <img class="one" src="~/static/img/kristie/james/01.jpg" alt="">
            <img class="one" src="~/static/img/kristie/james/02.jpg" alt="">
            <img class="one" src="~/static/img/kristie/james/02.jpg" alt="">
            <img class="one" src="~/static/img/kristie/james/03.jpg" alt="">
            <img class="one" src="~/static/img/kristie/james/03.jpg" alt="">
            <img class="one" src="~/static/img/kristie/james/04.jpg" alt="">
            <img class="one" src="~/static/img/kristie/james/04.jpg" alt="">
          </div>
          <ListItem
            kicker = '01'
            title = 'James Blake—Assume Form'
            subtitle = 'Assume Form by James Blake—Alternative'
          />
        </li>
      </ul>

      <section class="fuzzys"/>

      <n-link to = './mirely'>
        <Next
          kicker = 'Playing Next'
          title = "Mirely's Top 5"
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
    head() { return { title: "AOTY – Mirely's List" }},

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
