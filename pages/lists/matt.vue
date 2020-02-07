<!-- layout -->
<template>
  <div class="list--wrapper width">

    <Navigation class="anim--fade-in gravity">
      <template v-slot:left>
        <n-link to = '/2019'>Lists</n-link>
      </template>
      <template v-slot:center>
        <n-link to = '/2019'>Albums <span class="italic">of the</span> Year</n-link>
      </template>
      <template v-slot:right>Matt</template>
    </Navigation>

    <main>
      <Logotype
        class = "anim--enter outline--infrared"
        style = "fill: var(--gravity); transform: scale(.72)"
        title = 'Matt'
      />

      <ul>
        <li class="anim--enter">
          <n-link to = '/'>
            <ListItem
              kicker = '05'
              title = 'Kota the Friend–FOTO'
              subtitle = 'FOTO by Kota the Friend'
            />
          </n-link>
        </li>

        <li class="anim--enter">
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
              title = 'IGOR–Tyler, the Creator'
              subtitle = 'IGOR by Tyler, the Creator'
            />
          </n-link>
        </li>
      </ul>
    </main>

  </div>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '~/assets/grid.scss';

  .logotype { margin: 0 auto; }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 8rem 0;
  }

</style>


<!-- logic -->
<script>
  import { animateEnter, fadeIn } from '~/logic/animate.js'
  import Navigation from '~/components/Navigation'
  import Logotype from '~/components/Logotype'
  import ListItem from '~/components/ListItem'


  export default {
    components: { Navigation, Logotype, ListItem },

    beforeMount() {
      // document.body.style.background = 'var(--gravity)'
    },

    mounted() {
      animateEnter()
      fadeIn()
    },

  }
</script>
