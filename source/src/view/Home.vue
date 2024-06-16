<template>
  <div class="phone">
    <h1 class="sr-only">Sarah Rooney</h1>
    <div class="phone__top"></div>
    <div class="phone__screen">
      <div class="overlay"></div>

      <div class="message">
        <p>
          hi! i'm sarah rooney, a front-end developer and artist living and working in Chicago, IL.
        </p>
      </div>
      <div class="message">
        <p>°˖✧◝(⁰▿⁰)◜✧˖°</p>
      </div>

      <!-- <div class="apps">
        <router-link to="/about" class="apps__btn">
          <span class="icon icon--about"><span>✎</span> ̼</span>
          <span>About</span>
        </router-link>
        <router-link to="/work" class="apps__btn">
          <span class="icon icon--work">ʚ☻ɞ</span>
          <span>Work</span>
        </router-link>
        <router-link to="/development" class="apps__btn">
          <span class="icon icon--dev">꩜˖*</span>
          <span>Web Dev</span>
        </router-link>
      </div> -->
      <Menu v-bind:about="true" v-bind:work="true" v-bind:dev="true"/>
    </div>

    <router-link to="/" class="phone__home-button home-button"></router-link>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue'

  export default {
    name: 'Home',
    components: {
      Menu
    }
  }
</script>