<!-- layout -->
<template>
  <section class="tac">

    <h3 class="mb-8 headline">{{ kicker }}</h3>
    <h1 class="mb-2 display--lg">{{ title }}</h1>

  </section>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '~/assets/grid.scss';

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.2rem 0 11.2rem;
    width: 100vw;
    background: #000;
    color: var(--stone);
  }

  h3 {
    font: 1.8rem/1.6 'Steinbeck', var(--system-ui);
    @include breakpoint(md) { font-size: 2.2rem; }
  }

  h3:before {
    content: '';

  }

</style>


<!-- logic -->
<script>
  export default {
    props: ['kicker', 'title',]
  }
</script>
