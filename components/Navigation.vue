<!-- layout -->
<template>
  <nav class="">

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
    position: absolute;
    margin: 3.2rem auto;
    right: 0; left: 0;
    max-width: var(--max-width);
    width: 90vw;
    z-index: var(--z4);
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  ul { font-size: 2rem; }
  li:first-of-type, li:last-of-type { font-size: 1.6rem; }
  li:last-of-type { text-align: right; }
  li:nth-of-type(2) {
    position: absolute;
    margin: auto;
    top: -.2rem; right: 0; left: 0;
    width: max-content;
    font-size: 2rem;
    text-align: center;
  }

  // .italic { font-style: italic; }

</style>


<!-- logic -->
<script>
  export default {

  }
</script>
