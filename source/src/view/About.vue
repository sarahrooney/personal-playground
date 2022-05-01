<template>
  <div class="about">
    <h1 class="sr-only">About Sarah Rooney</h1>
    <div class="about__cntnt">
      <div class="txt">
        <h2>27/shethey/chicago</h2>
        <p>my work explores the correlations between personal identity and personalized technology.</p>
        <p>i'm also a fontend web developer -- some clients I've worked with in the past include Patagonia, Saucony, and the Apollo Theater in New York City. i'm currently working at <a href="//cliquestudios.com/" target="_blank"><span>Clique Studios</span></a>.</p>
        <p>i've collaborated with the folks at <a href="//netizen.org/" target="_blank"><span>netizen.org</span></a> designing & styling <a href="//netnet.studio/" target="_blank"><span>netnet.studio</span></a>, an open source hypermedia tool for learning and playing with code in the browser.</p>
      </div>

      <div class="socials">
        <p>💌 rooney.sarah2@gmail.com</p>
        <p>🐦 <a href="//twitter.com/watercaress" target="_blank"><span>@watercaress</span></a></p>
        <p>📸 <a href="//www.instagram.com/__little__apple/" target="_blank"><span>@__little__apple</span></a></p>
      </div>
    </div>

    <Menu v-bind:about="false" v-bind:work="true" v-bind:dev="true"/>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue'

  export default {
    name: 'About',
    components: {
      Menu
    }
  }
</script>
