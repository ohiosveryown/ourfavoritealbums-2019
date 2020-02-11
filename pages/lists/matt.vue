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
            <img class="img" src="~/static/img/matt/kota/01.jpg" alt="">
            <img class="img" src="~/static/img/matt/kota/02.jpg" alt="">
            <img class="img" src="~/static/img/matt/kota/04.jpg" alt="">
            <img class="img" src="~/static/img/matt/kota/03.jpg" alt="">
            <img class="img" src="~/static/img/matt/kota/03.jpg" alt="">
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
          <!-- <div class="imgs">
            <img class="img" src="~/static/img/matt/bon-iver/01.jpg" alt="">
            <img class="img" src="~/static/img/matt/bon-iver/02.jpg" alt="">
            <img class="img" src="~/static/img/matt/bon-iver/04.jpg" alt="">
            <img class="img" src="~/static/img/matt/bon-iver/03.jpg" alt="">
            <img class="img" src="~/static/img/matt/bon-iver/03.jpg" alt="">
          </div> -->
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
    top: -50%; right: 0; left: 0;
    margin: auto;
    width: 100%; height: 200%;

    img {
      position: absolute;
      transform-origin: top;
    }

    img:nth-of-type(1) {
      top: 0; left: 0;
      width: 21.2rem; height: auto;
    }

    img:nth-of-type(2) {
      bottom: 4%; left: 12%;
      width: 24rem; height: auto;
    }

    img:nth-of-type(3) {
      top: 20%; right: 0%;
      width: 15.6rem; height: auto;
    }

    img:nth-of-type(4) {
      bottom: 20%; right: 12%;
      width: 15.6rem; height: auto;
    }

    img:nth-of-type(5) {
      bottom: 16%; right: 8%;
      width: 15.6rem; height: auto;
    }

  }

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
  import { animateEnter, fadeIn } from '~/logic/animate.js'
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
      // logotype / avatar hover follow
      const avatar = document.querySelector('.avatar')
      document.addEventListener('mousemove', (e) => {
        avatar.setAttribute(
          'style',
          `transform: translate(${e.pageX - 100}px, ${e.pageY - 100}px);`
        )
      })
      // list item hover (5)
      const mq = matchMedia( '(pointer:fine)' )

      if (mq.matches) {
        const trigger = document.querySelectorAll('.list-item')[0]
        gsap.set('img', {
          opacity: 0,
        })

        trigger.addEventListener('mouseenter', () => {
          gsap.to('.img', {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: .075,
            duration: .6,
            ease: Power2.easeInOut
          })
        })

        trigger.addEventListener('mouseleave', () => {
          const tl = gsap.timeline()

          tl.to('.img', {
            opacity: 0,
            scaleY: 1.5,
            y: '2.4rem',
            stagger: .056,
            duration: .4,
            ease: Power2.easeInOut
          })

        tl.to('.img', {
            scaleY: 1,
            y: '0',
            duration: .1,
          })
        })
      }

    },

  }
</script>
