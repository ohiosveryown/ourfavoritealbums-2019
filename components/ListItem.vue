<!-- layout -->
<template>
  <div class="tac">

    <h3 class="mb-2 headline infrared">{{ kicker }}</h3>
    <h1 class="list-item mb-2 display--lg">{{ title }}</h1>
    <h2 class="body">{{ subtitle }}</h2>

  </div>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '~/assets/grid.scss';

  div {
    margin: 4rem auto 5.6rem;
    @include breakpoint(md) { margin: 8rem auto 32rem; }
  }

  h3 {
    font: 1.8rem/1.6 'Steinbeck', var(--system-ui);
    @include breakpoint(md) { font-size: 2.2rem; }
  }

  @media (pointer: fine) {
    h1:hover {
      // mix-blend-mode: difference;
      color: transparent;
      text-stroke: 2px var(--gravity);
      -webkit-text-stroke: 2px var(--gravity);
    }
  }

</style>


<!-- logic -->
<script>
  export default {
    props: ['kicker', 'title', 'subtitle']
  }
</script>
