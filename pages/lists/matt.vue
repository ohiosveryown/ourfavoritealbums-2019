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
      <template v-slot:right>Matt</template>
    </Navigation>


    <header id="fixed" class="pt-9">
      <Logotype
        class = "anim--enter outline--infrared"
        style = "fill: var(--gravity); transform: scale(.72)"
        title = 'Matt'
      />

      <img ref='avatar' class="avatar" src="~/static/img/avatars/matt.jpg" alt="matt">
    </header>

    <main class="width">
      <ul>
        <li class="anim--enter">
          <div class="imgs">
            <img class="five" src="~/static/img/matt/kota/01.jpg" alt="">
            <img class="five" src="~/static/img/matt/kota/01.jpg" alt="">
            <img class="five" src="~/static/img/matt/kota/02.jpg" alt="">
            <img class="five" src="~/static/img/matt/kota/02.jpg" alt="">
            <img class="five" src="~/static/img/matt/kota/03.jpg" alt="">
            <img class="five" src="~/static/img/matt/kota/03.jpg" alt="">
            <img class="five" src="~/static/img/matt/kota/04.jpg" alt="">
            <img class="five" src="~/static/img/matt/kota/04.jpg" alt="">
          </div>
          <ListItem
            kicker = '05'
            title = 'Kota the Friend–FOTO'
            subtitle = 'FOTO by Kota the Friend—Hip Hop'
          />
        </li>

        <li class="anim--enter">
          <div class="imgs">
            <img class="four" src="~/static/img/matt/bon-iver/01.jpg" alt="">
            <img class="four" src="~/static/img/matt/bon-iver/01.jpg" alt="">
            <img class="four" src="~/static/img/matt/bon-iver/02.jpg" alt="">
            <img class="four" src="~/static/img/matt/bon-iver/02.jpg" alt="">
            <img class="four" src="~/static/img/matt/bon-iver/03.jpg" alt="">
            <img class="four" src="~/static/img/matt/bon-iver/03.jpg" alt="">
            <img class="four" src="~/static/img/matt/bon-iver/04.jpg" alt="">
            <img class="four" src="~/static/img/matt/bon-iver/04.jpg" alt="">
          </div>
          <ListItem
            kicker = '04'
            title = 'Bon Iver—I,I'
            subtitle = 'I,I by Bon Ivor—Experimental'
          />
        </li>

        <li class="anim--enter">
          <div class="imgs">
            <img class="three" src="~/static/img/matt/taylor-swift/01.jpg" alt="">
            <img class="three" src="~/static/img/matt/taylor-swift/01.jpg" alt="">
            <img class="three" src="~/static/img/matt/taylor-swift/02.jpg" alt="">
            <img class="three" src="~/static/img/matt/taylor-swift/02.jpg" alt="">
            <img class="three" src="~/static/img/matt/taylor-swift/03.jpg" alt="">
            <img class="three" src="~/static/img/matt/taylor-swift/03.jpg" alt="">
            <img class="three" src="~/static/img/matt/taylor-swift/04.jpg" alt="">
            <img class="three" src="~/static/img/matt/taylor-swift/04.jpg" alt="">
          </div>
          <ListItem
            kicker = '03'
            title = 'Taylor Swift—Lover'
            subtitle = 'Lover by Taylor Swift—Pop'
          />
        </li>

        <li class="anim--enter">
         <div class="imgs">
            <img class="two" src="~/static/img/matt/choosey/01.jpg" alt="">
            <img class="two" src="~/static/img/matt/choosey/01.jpg" alt="">
            <img class="two" src="~/static/img/matt/choosey/02.jpg" alt="">
            <img class="two" src="~/static/img/matt/choosey/02.jpg" alt="">
            <img class="two" src="~/static/img/matt/choosey/03.jpg" alt="">
            <img class="two" src="~/static/img/matt/choosey/03.jpg" alt="">
            <img class="two" src="~/static/img/matt/choosey/04.jpg" alt="">
            <img class="two" src="~/static/img/matt/choosey/04.jpg" alt="">
          </div>
          <ListItem
            kicker = '02'
            title = 'Choosey & Exile—Black Beans'
            subtitle = 'Black Beans by Choosey & Exile—Hip Hop'
          />
        </li>

        <li class="anim--enter">
         <div class="imgs">
            <img class="one" src="~/static/img/matt/tyler/01.jpg" alt="">
            <img class="one" src="~/static/img/matt/tyler/01.jpg" alt="">
            <img class="one" src="~/static/img/matt/tyler/02.jpg" alt="">
            <img class="one" src="~/static/img/matt/tyler/02.jpg" alt="">
            <img class="one" src="~/static/img/matt/tyler/03.jpg" alt="">
            <img class="one" src="~/static/img/matt/tyler/03.jpg" alt="">
            <img class="one" src="~/static/img/matt/tyler/04.jpg" alt="">
            <img class="one" src="~/static/img/matt/tyler/04.jpg" alt="">
          </div>
          <ListItem
            kicker = '01'
            title = 'Tyler, the Creator—IGOR'
            subtitle = 'IGOR by Tyler, the Creator—Hip Hop'
          />
        </li>
      </ul>

      <section class="fuzzys"/>

      <n-link to = './andrew'>
        <Next
          kicker = 'Playing Next'
          title = "Andrew's Top 5"
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
    head() { return { title: "AOTY – Matt's List" }},

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
