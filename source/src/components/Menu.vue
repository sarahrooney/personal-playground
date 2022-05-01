<template>
  <div class="menu">
    <div class="apps">
      <router-link to="/" class="apps__btn">
        <span class="icon icon--home">°˖⤾</span>
        <span>Home</span>
      </router-link>
      <router-link v-if="about" to="/about" class="apps__btn">
        <span class="icon icon--about"><span>✎</span> ̼</span>
        <span>About</span>
      </router-link>
      <router-link v-if="work" to="/work" class="apps__btn">
        <span class="icon icon--work">ʚ☻ɞ</span>
        <span>Work</span>
      </router-link>
      <router-link v-if="dev" to="/development" class="apps__btn">
        <span class="icon icon--dev">꩜˖*</span>
        <span>Web Dev</span>
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
