<template>
  <div class="phone">
    <h1 class="sr-only">Sarah Rooney | About</h1>
    <div class="phone__top"></div>
    <div class="phone__screen">
      <div class="overlay"></div>

      <div class="about">
        <div class="about__cntnt">
          <h2>29/shethey/chicago</h2>
          <a class="inline-link cv" href="https://docs.google.com/document/d/1xBTE-XqEK6XkJDirgz8oyHLrDkxgKjRqUS8ZSMpZAf8/edit?usp=sharing" target="_blank"><span>˗ˋ⊹CV⊹ˊ˗</span></a>
          <p>my work explores the correlations between personal identity and personalized technology.</p>
          <p>i'm also a fontend web developer in love with css. i'm currently working at <a href="//patagonia.com/" target="_blank"><span>Patagonia</span></a>.</p>
          <p>i've collaborated with the folks at <a href="//netizen.org/" target="_blank"><span>netizen.org</span></a> designing & styling <a href="//netnet.studio/" target="_blank"><span>netnet.studio</span></a>, an open source hypermedia tool for learning and playing with code in the browser.</p>
        </div>

        <div class="about__socials">
          <p>💌 rooney.sarah2@gmail.com</p>
          <p>🐦 <a href="//twitter.com/watercaress" target="_blank"><span>@watercaress</span></a></p>
          <p>📸 <a href="//www.instagram.com/watercaress_/" target="_blank"><span>@watercaress_</span></a></p>
        </div>
      </div>

      <Menu v-bind:about="true" v-bind:work="true" v-bind:dev="true"/>
    </div>

    <router-link to="/" class="phone__home-button home-button"></router-link>
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
