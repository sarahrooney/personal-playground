<template>
  <div class="phone home">
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

      <Menu />

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
    },
    data() {
      return {
        className: "home",
      }
    },
  }
</script>