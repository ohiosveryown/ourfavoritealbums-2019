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
          <n-link to = '#'>
            <ListItem
              kicker = '05'
              title = 'Kota the Friend–FOTO'
              subtitle = 'FOTO by Kota the Friend'
            />
          </n-link>
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
          <n-link to = '/'>
            <ListItem
              kicker = '04'
              title = 'Bon Iver—I,I'
              subtitle = 'I,I by Bon Ivor'
            />
          </n-link>
        </li>

        <li class="anim--enter">
          <n-link to = '/'>
            <ListItem
              kicker = '03'
              title = 'Taylor Swift—Lover'
              subtitle = 'Lover by Taylor Swift'
            />
          </n-link>
        </li>

        <li class="anim--enter">
          <n-link to = '/'>
            <ListItem
              kicker = '02'
              title = 'Choosey & Exile—Black Beans'
              subtitle = 'Black Beans by Choosey & Exile'
            />
          </n-link>
        </li>

        <li class="anim--enter">
          <n-link to = '/'>
            <ListItem
              kicker = '01'
              title = 'Tyler, the Creator—IGOR'
              subtitle = 'IGOR by Tyler, the Creator'
            />
          </n-link>
        </li>
      </ul>

      <section class="fuzzys"/>

      <Next
        kicker = 'Playing Next'
        title = "Chad's Top 5"
      />
    </main>

  </div>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '~/assets/grid.scss';

  .imgs {
    position: absolute;
    z-index: var(--zmin);
    top: 0%; right: 0; left: 0;
    margin: auto;
    width: 100%; height: 200%;

    img {
      position: absolute;
      transform-origin: top;
    }

    img:nth-of-type(1) { width: 21.2rem; height: auto; }
    img:nth-of-type(2) { width: 24rem; height: auto; }
    img:nth-of-type(3) { width: 15.6rem; height: auto; }
    img:nth-of-type(4) { width: 15.6rem; height: auto; }
    img:nth-of-type(5) { width: 15.6rem; height: auto; }
    img:nth-of-type(6) { width: 21.2rem; height: auto; }
    img:nth-of-type(7) { width: 24rem; height: auto; }
    img:nth-of-type(8) { width: 15.6rem; height: auto; }


  }

  .list--wrapper { overflow-x: hidden; }

  .logotype { margin: 0 auto; }
  @media(pointer: fine) { .logotype { mix-blend-mode: difference; }}

  .avatar {
    position: absolute;
    z-index: var(--zmin);
    top: 0; left: 0;
    width: 200px; height: 200px;
    object-fit: cover;
    transition: transform 800ms cubic-bezier(.08, .8, .164, 1), opacity 300ms ease;
    opacity: 0;
    will-change: transform;
  }

  @media(pointer: fine) { .logotype:hover ~ .avatar { opacity: 1; }}

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 0rem 0 11.2rem;
    @include breakpoint(md) { margin-top: 1.6rem; }
  }

  // li { overflow-x: hidden; }

  .fuzzys {
    position: relative;
    z-index: var(--zmin);
    width: 100vw; height: 60rem;
    background: url('https://raw.githubusercontent.com/ohiosveryown/ourfavoritealbums-2019/master/static/img/fuzzys.jpg'), var(--stone) no-repeat;
    background-size: cover;
    background-blend-mode: multiply;
    // transform: translateY(-24rem);
    margin-top: -24rem;
    @include breakpoint(lg) { height: 80rem; }
  }

</style>


<!-- logic -->
<script>
  import { animateEnter, fadeIn, entry } from '~/logic/animate.js'
  import Navigation from '~/components/Navigation'
  import Logotype from '~/components/Logotype'
  import ListItem from '~/components/ListItem'
  import Next from '~/components/Next'


  export default {
    components: { Navigation, Logotype, ListItem, Next },

    beforeMount() {
      // document.body.style.background = 'var(--gravity)'
    },

    mounted() {
      animateEnter()
      fadeIn()
      entry()

      // logotype / avatar hover follow
      const avatar = document.querySelector('.avatar')
      document.addEventListener('mousemove', (e) => {
        avatar.setAttribute(
          'style',
          `transform: translate(${e.pageX - 100}px, ${e.pageY - 100}px);`
        )
      })
      // list item hover (5)
      entry()
    },

  }
</script>
