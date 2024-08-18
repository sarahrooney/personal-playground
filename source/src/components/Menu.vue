<template>
  <div class="menu">
    <div class="apps">
      <!-- <router-link to="/" class="apps__btn">
        <span class="icon icon--home">°˖⤾</span>
        <span>Home</span>
      </router-link> -->
      <router-link to="/about" class="apps__btn" :class="{active : about}">
        <div class="icon icon--about">
          <img src="../assets/images/menu/about.png" 
               alt="Link to About"
               class="icon__inner">
        </div>
        <span class="icon__label">about</span>
      </router-link>
      <router-link to="/work" class="apps__btn" :class="{active : work}">
        <div class="icon icon--work">
          <img src="../assets/images/menu/work.png" 
               alt="Link to Work"
               class="icon__inner">
        </div>
        <span class="icon__label">work</span>
      </router-link>
      <router-link to="/development" class="apps__btn" :class="{active : dev}">
        <div class="icon icon--dev">
          <img src="../assets/images/menu/dev.png" 
               alt="Link to Dev"
               class="icon__inner">
        </div>
        <span class="icon__label">dev</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    about: Boolean,
    work: Boolean,
    dev: Boolean
  },
  methods: {
    toggle(e) {
      const menu = document.querySelector('.menu');
      menu.classList.toggle('open')
    }
  }
}
</script>
