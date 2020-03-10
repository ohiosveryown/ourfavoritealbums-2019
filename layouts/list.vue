<!-- layout -->
<template>
  <nuxt/>
</template>


<!-- style -->
<style lang='scss'>
  @import '~/assets/grid.scss';

  .imgs {
    position: absolute;
    z-index: var(--zmin);
    top: 0%; right: 0; left: 0;
    margin: auto;
    width: 100%; height: 200%;

    img {
      position: absolute;
      transform-origin: top;
    }

    img:nth-of-type(1) { width: 21.2rem; height: auto; }
    img:nth-of-type(2) { width: 24rem; height: auto; }
    img:nth-of-type(3) { width: 15.6rem; height: auto; }
    img:nth-of-type(4) { width: 15.6rem; height: auto; }
    img:nth-of-type(5) { width: 15.6rem; height: auto; }
    img:nth-of-type(6) { width: 21.2rem; height: auto; }
    img:nth-of-type(7) { width: 24rem; height: auto; }
    img:nth-of-type(8) { width: 15.6rem; height: auto; }
  }

  .list--wrapper { overflow-x: hidden; }

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
    padding: 0 0 0;
    @include breakpoint(md) { margin-top: 1.6rem; }
  }

  // li { overflow-x: hidden; }

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

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6rem 0;
    width: 100%; height: 100%;
  }
</style>

<script>
  export default {

  }
</script>