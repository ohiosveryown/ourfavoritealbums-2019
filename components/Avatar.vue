<!-- layout -->
<template>
  <div class="wrapper">
    <span class="keyword">{{ title }}</span>
    <slot name = 'avatar' />
  </div>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '~/assets/grid.scss';

  .wrapper { display: inline; position: relative; }

  span.keyword {
    display: inline;
    position: relative;
    overflow: hidden;
    @include breakpoint(md) { text-decoration: underline; }
  }

  span.keyword:hover ~ figure {
    @include breakpoint(md) {
      opacity: 1;
      transform: translate(-50%,-50%) scale(1);
      transition: all 600ms cubic-bezier(0.2,-2,0,4);
    }
  }

  figure {
    display: inline;
    position: absolute;
    top: 50%; left: 50%;
    z-index: var(--zmin);
    opacity: 0;
    transform: translate(-50%,-50%) scale(0.94);
    transition: all 150ms ease;
    will-change: transform;
  }

</style>


<!-- logic -->
<script>
  export default {
    props: [ 'title' ]
  }
</script>
