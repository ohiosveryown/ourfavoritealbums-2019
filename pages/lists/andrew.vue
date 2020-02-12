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
      <template v-slot:right>Andrew</template>
    </Navigation>


    <header id="fixed" class="pt-9">
      <Logotype
        class = "anim--enter outline--infrared"
        style = "fill: var(--gravity); transform: scale(.72)"
        title = 'Andrew'
      />

      <img ref='avatar' class="avatar" src="~/static/img/avatars/andrew.jpg" alt="andrew">
    </header>

    <main class="width">
      <ul>
        <li class="anim--enter">
          <div class="imgs">
            <img class="five" src="~/static/img/andrew/post/01.jpg" alt="">
            <img class="five" src="~/static/img/andrew/post/01.jpg" alt="">
            <img class="five" src="~/static/img/andrew/post/02.jpg" alt="">
            <img class="five" src="~/static/img/andrew/post/02.jpg" alt="">
            <img class="five" src="~/static/img/andrew/post/03.jpg" alt="">
            <img class="five" src="~/static/img/andrew/post/03.jpg" alt="">
            <img class="five" src="~/static/img/andrew/post/04.jpg" alt="">
            <img class="five" src="~/static/img/andrew/post/04.jpg" alt="">
          </div>
          <n-link to = '#'>
            <ListItem
              kicker = '05'
              title = "Post Malone–Hollywood's Bleeding"
              subtitle = "Hollywood's Bleeding by Post Malone—Pop"
            />
          </n-link>
        </li>

        <li class="anim--enter">
          <div class="imgs">
            <img class="four" src="~/static/img/andrew/nasx/01.jpg" alt="">
            <img class="four" src="~/static/img/andrew/nasx/01.jpg" alt="">
            <img class="four" src="~/static/img/andrew/nasx/02.jpg" alt="">
            <img class="four" src="~/static/img/andrew/nasx/02.jpg" alt="">
            <img class="four" src="~/static/img/andrew/nasx/03.jpg" alt="">
            <img class="four" src="~/static/img/andrew/nasx/03.jpg" alt="">
            <img class="four" src="~/static/img/andrew/nasx/04.jpg" alt="">
            <img class="four" src="~/static/img/andrew/nasx/04.jpg" alt="">
          </div>
          <n-link to = '/'>
            <ListItem
              kicker = '04'
              title = 'Lil Nas X—7 EP'
              subtitle = '7 EP by Lil Nas X—Hip Hop'
            />
          </n-link>
        </li>

        <li class="anim--enter">
          <div class="imgs">
            <img class="three" src="~/static/img/andrew/ye/01.jpg" alt="">
            <img class="three" src="~/static/img/andrew/ye/01.jpg" alt="">
            <img class="three" src="~/static/img/andrew/ye/02.jpg" alt="">
            <img class="three" src="~/static/img/andrew/ye/02.jpg" alt="">
            <img class="three" src="~/static/img/andrew/ye/03.jpg" alt="">
            <img class="three" src="~/static/img/andrew/ye/03.jpg" alt="">
            <img class="three" src="~/static/img/andrew/ye/04.jpg" alt="">
            <img class="three" src="~/static/img/andrew/ye/05.jpg" alt="">
          </div>
          <n-link to = '/'>
            <ListItem
              kicker = '03'
              title = 'Kanye West—Jesus is King'
              subtitle = 'Jesus is King by Kanye West—Gospel'
            />
          </n-link>
        </li>

        <li class="anim--enter">
         <div class="imgs">
            <img class="two" src="~/static/img/andrew/dreamville/01.jpg" alt="">
            <img class="two" src="~/static/img/andrew/dreamville/01.jpg" alt="">
            <img class="two" src="~/static/img/andrew/dreamville/02.jpg" alt="">
            <img class="two" src="~/static/img/andrew/dreamville/02.jpg" alt="">andrew
nasx class="two" src="~/static/img/andrew/dreamville/03.jpg" alt="">
            <img class="two" src="~/static/img/andrew/dreamville/03.jpg" alt="">
            <img class="two" src="~/static/img/andrew/dreamville/04.jpg" alt="">
            <img class="two" src="~/static/img/andrew/dreamville/04.jpg" alt="">
          </div>
          <n-link to = '/'>
            <ListItem
              kicker = '02'
              title = 'Dreamville—Revenge of the Dreamers III'
              subtitle = 'Revenge of the Dreamers by Dreamville III—Hip Hop'
            />
          </n-link>
        </li>

        <li class="anim--enter">
         <div class="imgs">
            <img class="one" src="~/static/img/andrew/billie/01.jpg" alt="">
            <img class="one" src="~/static/img/andrew/billie/01.jpg" alt="">
            <img class="one" src="~/static/img/andrew/billie/02.jpg" alt="">
            <img class="one" src="~/static/img/andrew/billie/02.jpg" alt="">
            <img class="one" src="~/static/img/andrew/billie/03.jpg" alt="">
            <img class="one" src="~/static/img/andrew/billie/03.jpg" alt="">
            <img class="one" src="~/static/img/andrew/billie/04.jpg" alt="">
            <img class="one" src="~/static/img/andrew/billie/04.jpg" alt="">
          </div>
          <n-link to = '/'>
            <ListItem
              kicker = '01'
              title = 'Billie Eilish—When We Fall Asleep...'
              subtitle = 'When We Fall Asleep... by Billie Eilish—Pop'
            />
          </n-link>
        </li>
      </ul>

      <section class="fuzzys"/>

      <n-link to = 'lists/caleb'>
        <Next
          kicker = 'Playing Next'
          title = "Caleb's Top 5"
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
    head() { return { title: "AOTY – Andrew's List" }},

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
