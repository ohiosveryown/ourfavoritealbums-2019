<!-- layout -->
<template>
  <ul>
    <h3 class="list--header anim--enter headline infrared mb-2">2019 Lists</h3>
    <li class="anim--enter mb-3">
      <n-link to = '/lists/matt'>
        <div class="wrapper">
          <h2 class="keyword mb-0 link content-width respira">Matt's Top 5 Albums</h2>
          <figure class="matt"></figure>
        </div>
      </n-link>
      <a
        class="steinbeck op-5"
        href="https://twitter.com/cmykw_"
        target="_blank">
        @cmykw_
      </a>
    </li>

    <li class="anim--enter mb-3">
      <n-link to = '/'>
        <div class="wrapper">
          <h2 class="keyword mb-0 link content-width respira">Andrew's Top 5 Albums</h2>
          <figure class="andrew"></figure>
        </div>
      </n-link>
      <a
        class="steinbeck op-5"
        href="https://www.instagram.com/andrewtheonly"
        target="_blank">
        @andrewtheonly
      </a>
    </li>

    <li class="anim--enter mb-3">
      <n-link to = '/'>
        <div class="wrapper">
          <h2 class="keyword mb-0 link content-width respira">Caleb's Top 5 Albums</h2>
          <figure class="caleb"></figure>
        </div>
      </n-link>
      <a
        class="steinbeck op-5"
        href="https://www.instagram.com/calebb"
        target="_blank">
        @calebb
      </a>
    </li>

    <li class="anim--enter mb-3">
      <n-link to = '/'>
        <div class="wrapper">
          <h2 class="keyword mb-0 link content-width respira">Chad's Top 5 Albums</h2>
          <figure class="chad"></figure>
        </div>
      </n-link>
      <a
        class="steinbeck op-5"
        href="https://www.twitter.com/chadurbanick"
        target="_blank">
        @chadurbanick
      </a>
    </li>

    <li class="anim--enter mb-3">
      <n-link to = '/'>
        <div class="wrapper">
          <h2 class="keyword mb-0 link content-width respira">Jordan's Top 5 Albums</h2>
          <figure class="jordan"></figure>
        </div>
      </n-link>
      <a
        class="steinbeck op-5"
        href="https://jordanjung.com"
        target="_blank">
        jordanjung.com
      </a>
    </li>

    <li class="anim--enter mb-3">
      <n-link to = '/'>
        <div class="wrapper">
          <h2 class="keyword mb-0 link content-width respira">Kristie's Top 5 Albums</h2>
          <figure class="kristie"></figure>
        </div>
      </n-link>
      <a
        class="steinbeck op-5"
        href="https://www.instagram.com/kristiefeltner"
        target="_blank">
        @kristiefeltner
      </a>
    </li>

    <li class="anim--enter mb-3">
      <n-link to = '/'>
        <div class="wrapper">
          <h2 class="keyword mb-0 link content-width respira">Mirely's Top 5 Albums</h2>
          <figure class="mirely"></figure>
        </div>
      </n-link>
      <a
        class="steinbeck op-5"
        href="https://www.instagram.com/mirelycab"
        target="_blank">
        @mirelycab
      </a>
    </li>

    <li class="anim--enter mb-3">
      <n-link to = '/'>
        <div class="wrapper">
          <h2 class="keyword mb-0 link content-width respira">Roy's Top 5 Albums</h2>
          <figure class="roy"></figure>
        </div>
      </n-link>
      <a
        class="steinbeck op-5"
        href="https://www.instagram.com/Old_Orleans"
        target="_blank">
        @Old_Orleans
      </a>
    </li>
  </ul>
</template>


<!-- style -->
<style lang='scss' scoped>
  @import '~/assets/grid.scss';

  .wrapper { display: inline; position: relative; }

  h2.keyword {
    position: relative;
    overflow: hidden;
    @include breakpoint(md) { text-decoration: underline; }
  }

  h2.keyword:hover ~ figure {
    @include breakpoint(md) {
      opacity: 1;
      transform: translate(10%,-60%) scale(1);
      transition: all 200ms var(--inout);
    }
  }

  figure {
    position: absolute;
    top: 50%; left: 50%;
    z-index: var(--zmin);
    opacity: 0;
    transform: translate(10%,-60%) scale(0.94);
    transition: all 150ms ease;
    will-change: transform;
    pointer-events: none;
  }

  figure.matt {
    width: 200px; height: 200px;
    background: url('../static/img/avatars/matt.jpg') no-repeat center center;
    background-blend-mode: soft-light;
    background-size: cover;
  }

  figure.andrew {
    width: 200px; height: 200px;
    background: url('../static/img/avatars/andrew.jpg') no-repeat center center;
    background-blend-mode: soft-light;
    background-size: cover;
  }

  figure.caleb {
    width: 200px; height: 200px;
    background: url('../static/img/avatars/caleb.jpg') no-repeat center center;
    background-blend-mode: soft-light;
    background-size: cover;
  }

  figure.chad {
    width: 200px; height: 200px;
    background: url('../static/img/avatars/chad.jpg') no-repeat center center;
    background-blend-mode: soft-light;
    background-size: cover;
  }

  figure.jordan {
    width: 200px; height: 200px;
    background: url('../static/img/avatars/jordan.jpg') no-repeat center center;
    background-blend-mode: soft-light;
    background-size: cover;
  }

  figure.kristie {
    width: 200px; height: 200px;
    background: url('../static/img/avatars/kristie.jpg') no-repeat center center;
    background-blend-mode: soft-light;
    background-size: cover;
  }

  figure.mirely {
    width: 200px; height: 200px;
    background: url('../static/img/avatars/mirely.jpg') no-repeat center center;
    background-blend-mode: soft-light;
    background-size: cover;
  }

  figure.roy {
    width: 200px; height: 200px;
    background: url('../static/img/avatars/roy.jpg') no-repeat center center;
    background-blend-mode: soft-light;
    background-size: cover;
  }

</style>


<!-- logic -->
<script>
  export default {
    props: [ 'title' ]
  }
</script>
