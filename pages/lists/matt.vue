<!-- layout -->
<template>
  <div class="list-wrapper width">

    <nav class="mt-4">
      <div class="nav--left steinbeck">
        <n-link to = '/about'>All Lists</n-link>
      </div>
      <div class="nav--title tac canela">Albums <span>of the</span> YEAR</div>
      <div class="nav--right tar steinbeck">
        <n-link to = '/lists/matt'>Matt 2019</n-link>
      </div>
    </nav>

    <Logotype
      class = "gsap"
      title = 'Matt'
    />

    <ListItem

    />


  </div>
</template>


<!-- style -->
<style>

</style>


<!-- logic -->
<script>
  import Logotype from '~/components/Logotype'
  import ListItem from '~/components/ListItem'

  export default {
    layout: 'list',
    components: { Logotype, ListItem }
  }
</script>