<!-- layout -->
<template>
  <li>
    <h3>10</h3>
    <h1
      @mouseenter="hover = true"
      @mouseleave="hover = false"
    >Bon Ivor—I,I</h1>
    <h2>I,I by Bon Iver—Expiremental</h2>
    <img
      :class = "{ active: hover }"
      src="~/static/img/about1.png" alt="">
  </li>
</template>


<!-- style -->
<style>
  h1 { width: max-content; }

  img {
    position: absolute;
    z-index: var(--zmin);
    opacity: 0;
  }

  .active { opacity: 1; }

  img:nth-of-type(1) { top: 0; left: 0; }
  img:nth-of-type(2) { top: 0; left: 40%; }

</style>


<!-- logic -->
<script>
  import Logotype from '~/components/Logotype'

  export default {
    layout: 'list',

    data() {
      return {
        hover: false
      }
    }

    // mounted() {
    //   const h1 = document.querySelector('h1')
    //   const img = document.querySelectorAll('img')[0]

    //   h1.addEventListener('mouseenter', () => {
    //     img.style.opacity = '1'
    //   })

    //   h1.addEventListener('mouseleave', () => {
    //     img.style.opacity = '0'
    //   })

    //   console.log(img)
    // }
  }
</script>