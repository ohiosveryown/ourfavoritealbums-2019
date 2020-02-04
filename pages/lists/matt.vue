<!-- layout -->
<template>
  <div class="detail-wrapper width">

    <nav>
      <div class="nav--left link steinbeck">
        <n-link to = '/'>All Lists</n-link>
      </div>
      <div class="nav--title tac canela">Albums <span>of the</span> YEAR</div>
      <div class="nav--right tar steinbeck">Matt's List</div>
    </nav>

    <LogotypeD
      class = "anim--enter"
      title = 'Matt'
    />

    <Entry
      class = "anim--enter"
      kicker = '05'
      title = 'Kota the Friend—FOTO'
      subtitle = 'FOTO by Kota the Friend—Hip Hop'
    />

    <Entry
      class = "anim--enter"
      kicker = '04'
      title = 'Bon Iver—I,I'
      subtitle = 'I,I by Bon Iver—Expiremental'
    />

    <Entry
      class = "anim--enter"
      kicker = '03'
      title = 'Taylor Swift—Lover'
      subtitle = 'Lover by Taylor Swift—Pop'
    />

    <Entry
      class = "anim--enter"
      kicker = '02'
      title = 'Choosey & Exile—Black Beans'
      subtitle = 'Black Beans by Choosey & Exile—Hip Hop'
    />

    <Entry
      class = "anim--enter"
      kicker = '01'
      title = 'Tyler, the Creator—IGOR'
      subtitle = 'IGOR by Tyler the Hip Hop'
    />

  </div>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '~/assets/grid.scss';

  .detail-wrapper { height: 300vh; }

  .logotype {
    position: relative;
    z-index: var(--z3);
    margin: 0 auto;
  }

  nav {
    margin: 2.4rem 0 6.4rem;
    @include breakpoint(md) { margin: 3.2rem 0 6.4rem; }
  }


</style>


<!-- logic -->
<script>
  import { scrolling } from '~/logic/forApp.js'
  import LogotypeD from '~/components/LogotypeD'
  import Entry from '~/components/Entry'

  export default {
   beforeMount() {
      document.body.style.background = 'var(--stone)'
    },

    mounted() {

      // scrolling()

      gsap.from('.anim--enter', {
        opacity: 0,
        y: 200,
        skewY: 10,
        stagger: .075,
        duration: 1,
        ease: Power2.easeInOut
      })
    },

    beforeDestroy() {
      // document.body.style.background = 'var(--stone)'
    },

    components: { LogotypeD, Entry }
  }
</script>
