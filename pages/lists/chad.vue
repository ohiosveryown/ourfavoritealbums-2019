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
      <template v-slot:right>Chad</template>
    </Navigation>


    <header id="fixed" class="pt-9">
      <Logotype
        class = "anim--enter outline--infrared"
        style = "fill: var(--gravity); transform: scale(.72)"
        title = 'Chad'
      />

      <img ref='avatar' class="avatar" src="~/static/img/avatars/chad.jpg" alt="chad">
    </header>

    <main class="width">
      <ul>
        <li class="anim--enter">
          <div class="imgs">
            <img class="five" src="~/static/img/chad/ross/01.jpg" alt="">
            <img class="five" src="~/static/img/chad/ross/01.jpg" alt="">
            <img class="five" src="~/static/img/chad/ross/02.jpg" alt="">
            <img class="five" src="~/static/img/chad/ross/02.jpg" alt="">
            <img class="five" src="~/static/img/chad/ross/03.jpg" alt="">
            <img class="five" src="~/static/img/chad/ross/03.jpg" alt="">
            <img class="five" src="~/static/img/chad/ross/04.jpg" alt="">
            <img class="five" src="~/static/img/chad/ross/04.jpg" alt="">
          </div>
          <n-link to = '#'>
            <ListItem
              kicker = '05'
              title = 'Low Roar–ross.'
              subtitle = 'ross. by Low Roar—Indie'
            />
          </n-link>
        </li>

        <li class="anim--enter">
          <div class="imgs">
            <img class="four" src="~/static/img/chad/vampire/01.jpg" alt="">
            <img class="four" src="~/static/img/chad/vampire/01.jpg" alt="">
            <img class="four" src="~/static/img/chad/vampire/02.jpg" alt="">
            <img class="four" src="~/static/img/chad/vampire/02.jpg" alt="">
            <img class="four" src="~/static/img/chad/vampire/03.jpg" alt="">
            <img class="four" src="~/static/img/chad/vampire/03.jpg" alt="">
            <img class="four" src="~/static/img/chad/vampire/04.jpg" alt="">
            <img class="four" src="~/static/img/chad/vampire/04.jpg" alt="">
          </div>
          <n-link to = '/'>
            <ListItem
              kicker = '04'
              title = 'Vampire Weekend—Father of the Bride'
              subtitle = 'Father of the Bride by Vampire Weekend—Alternative'
            />
          </n-link>
        </li>

        <li class="anim--enter">
          <div class="imgs">
            <img class="three" src="~/static/img/chad/clammbon/01.jpg" alt="">
            <img class="three" src="~/static/img/chad/clammbon/01.jpg" alt="">
            <img class="three" src="~/static/img/chad/clammbon/02.jpg" alt="">
            <img class="three" src="~/static/img/chad/clammbon/02.jpg" alt="">
            <img class="three" src="~/static/img/chad/clammbon/03.jpg" alt="">
            <img class="three" src="~/static/img/chad/clammbon/03.jpg" alt="">
            <img class="three" src="~/static/img/chad/clammbon/04.jpg" alt="">
            <img class="three" src="~/static/img/chad/clammbon/04.jpg" alt="">
          </div>
          <n-link to = '/'>
            <ListItem
              kicker = '03'
              title = 'Clammbon—Moment l.p.'
              subtitle = 'Moment l.p. by Clammbon—Indie'
            />
          </n-link>
        </li>

        <li class="anim--enter">
         <div class="imgs">
            <img class="two" src="~/static/img/chad/mgrig/01.jpg" alt="">
            <img class="two" src="~/static/img/chad/mgrig/01.jpg" alt="">
            <img class="two" src="~/static/img/chad/mgrig/02.jpg" alt="">
            <img class="two" src="~/static/img/chad/mgrig/02.jpg" alt="">
            <img class="two" src="~/static/img/chad/mgrig/03.jpg" alt="">
            <img class="two" src="~/static/img/chad/mgrig/03.jpg" alt="">
            <img class="two" src="~/static/img/chad/mgrig/04.jpg" alt="">
            <img class="two" src="~/static/img/chad/mgrig/04.jpg" alt="">
          </div>
          <n-link to = '/'>
            <ListItem
              kicker = '02'
              title = 'M. Grig—Mount Carmel'
              subtitle = 'Mount Carmel by M. Grig—Ambient'
            />
          </n-link>
        </li>

        <li class="anim--enter">
         <div class="imgs">
            <img class="one" src="~/static/img/chad/takagi/01.jpg" alt="">
            <img class="one" src="~/static/img/chad/takagi/01.jpg" alt="">
            <img class="one" src="~/static/img/chad/takagi/02.jpg" alt="">
            <img class="one" src="~/static/img/chad/takagi/02.jpg" alt="">
            <img class="one" src="~/static/img/chad/takagi/03.jpg" alt="">
            <img class="one" src="~/static/img/chad/takagi/03.jpg" alt="">
            <img class="one" src="~/static/img/chad/takagi/04.jpg" alt="">
            <img class="one" src="~/static/img/chad/takagi/04.jpg" alt="">
          </div>
          <n-link to = '/'>
            <ListItem
              kicker = '01'
              title = 'Masakatsu Takagi—Marginalia II'
              subtitle = 'Marginalia II by Masakatsu Takagi—Indie'
            />
          </n-link>
        </li>
      </ul>

      <section class="fuzzys"/>

      <n-link to = 'lists/chad'>
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
    components: { Navigation, Logotype, ListItem, Next },
    layout: 'list',

    beforeMount() {
      // document.body.style.background = 'var(--gravity)'
    },

    mounted() {
      animateEnter()
      fadeIn()
      listItemLogic()
    },

  }
</script>
