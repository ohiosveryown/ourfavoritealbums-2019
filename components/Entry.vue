<!-- layout -->
<template>
  <li class="tac">

    <h3 class="mb-2 headline infrared">{{ kicker }}</h3>
    <h1 class="mb-3 display">{{ title }}</h1>
    <h2 class="body canela">{{ subtitle }}</h2>

  </li>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '~/assets/grid.scss';

  li {
    margin: 7.2rem 0;
    @include breakpoint(mdl) { margin: 9.6rem 0 14rem; }
  }

  h1 {
    line-height: 1.2;
    font-size: 2.2rem;
    @include breakpoint(xs) { font-size: 12vw; }
    @include breakpoint(md) { font-size: 12vw; }
    @include breakpoint(xl) { font-size: 16.8rem; }
  }

</style>


<!-- logic -->
<script>
  export default {
    props: [ 'kicker', 'title', 'subtitle' ],
  }
</script>
