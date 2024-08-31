<template>
  <div class="phone">
    <div class="phone__top"></div>
    <div class="phone__screen phone__screen--start">
      <div class="overlay"></div>

      <div class="dev">
        <div class="dev__cntnt">
            <h1 class="dev__hdr">front-end dev</h1>

            <div class="dev__item">
              <div class="dev__title">
                <h2>The Apollo Theater</h2> <span>@ clique studios</span>
              </div>
              <!-- <video muted="muted" preload="none" loop="loop" autoplay="autoplay" poster="../assets/images/dev/apollo_1.jpg">
                <source src="../assets/media/apollo1.mp4" type="video/mp4">
              </video> -->
              <img src="../assets/images/dev/apollo_1.jpg" alt="screenshot of Apollo's homepage">
              <!-- <span>design by the talented folks at Clique Studios</span> -->
              <a class="inline-link" href="//www.apollotheater.org/" target="_blank"><span>apollotheater.org</span></a><br>
              <span>wordpress development</span>
            </div>

            <div class="dev__item">
              <div class="dev__title">
                <h2>Done in an R1</h2> <span>@ someoddpilot</span>
              </div>
              <!-- <video muted="muted" preload="none" loop="loop" autoplay="autoplay" poster="../assets/images/dev/r1_poster.jpg">
                <source src="../assets/media/toprecording.mp4" type="video/mp4">
              </video> -->
              <img src="../assets/images/dev/r1_2.jpg" alt="screenshot of Patagonia's Done in an R1 site">
              <img src="../assets/images/dev/r1_1.jpg" alt="screenshot of Patagonia's Done in an R1 site">
              <!-- <video muted="muted" preload="none" loop="loop" autoplay="autoplay" poster="../assets/images/dev/r1_poster2.jpg">
                <source src="../assets/media/doneinanr1_2.mp4" type="video/mp4">
              </video> -->
              <!-- <span>design by the talented folks at Someoddpilot</span> -->
              <span>vue single page application promoting patagonia's r1 jacket</span>
            </div>

        </div>
      </div>
      <Menu :dev="true"/>
  </div>

    <router-link to="/" class="phone__home-button home-button"></router-link>
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
