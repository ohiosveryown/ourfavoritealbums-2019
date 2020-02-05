<!-- layout -->
<template>
  <nav>

    <ul>
      <li class="steinbeck"><slot name = 'left'/></li>
      <li class="canela"><slot name = 'center'/></li>
      <li class="steinbeck"><slot name = 'right'/></li>
    </ul>

  </nav>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '~/assets/grid.scss';

  nav {
    margin: 2.4rem auto 3.2rem;
    @include breakpoint(md) { margin: 3.2rem auto; }
  }

  nav, ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  ul { font-size: 2rem; }
  li:first-of-type, li:last-of-type { font-size: 1.6rem; }
  span { font-style: italic; }

</style>


<!-- logic -->
<script>
  export default {

  }
</script>
