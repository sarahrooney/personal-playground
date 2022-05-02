<template>
  <div class="dev">
    <div class="dev__cntnt">
      <div class="txt">
        <h1>web development</h1>

        <div class="dev__item">
          <div class="dev__title">
            <a href="//www.apollotheater.org/" target="_blank"><h2>apollotheater.org</h2></a>
            <span>wordpress development</span>
          </div>
          <video muted="muted" preload="none" loop="loop" autoplay="autoplay" poster="../assets/images/dev/apollo_1.jpg">
            <source src="../assets/media/apollo1.mp4" type="video/mp4">
          </video>
          <span>design by the talented folks at Clique Studios</span>
        </div>

        <div class="dev__item">
          <div class="dev__title">
            <h2>Done in an R1</h2>
            <span>A simple Vue application to promote Patagonia's R1 jacket (no longer live)</span>
          </div>
          <video muted="muted" preload="none" loop="loop" autoplay="autoplay" poster="../assets/images/dev/r1_poster.jpg">
            <source src="../assets/media/toprecording.mp4" type="video/mp4">
          </video>
          <img src="../assets/images/dev/r1_2.jpg" alt="screenshot of Patagonia's Done in an R1 site">
          <img src="../assets/images/dev/r1_1.jpg" alt="screenshot of Patagonia's Done in an R1 site">
          <video muted="muted" preload="none" loop="loop" autoplay="autoplay" poster="../assets/images/dev/r1_poster2.jpg">
            <source src="../assets/media/doneinanr1_2.mp4" type="video/mp4">
          </video>
          <span>design by the talented folks at Someoddpilot</span>
        </div>
      </div>
    </div>

    <Menu v-bind:about="true" v-bind:work="true" v-bind:dev="false"/>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue'

export default {
  name: 'Development',
  components: {
    Menu
  }
};
</script>
