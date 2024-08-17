<template>
  <div class="menu">
    <div class="apps">
      <!-- <router-link to="/" class="apps__btn">
        <span class="icon icon--home">°˖⤾</span>
        <span>Home</span>
      </router-link> -->
      <router-link to="/about" class="apps__btn" :class="{active : about}">
        <div class="icon icon--about">
          <span class="icon__inner">
            <span>✎</span> ̼
          </span>
        </div>
        <span>about</span>
      </router-link>
      <router-link to="/work" class="apps__btn" :class="{active : work}">
        <div class="icon icon--work">
          <span class="icon__inner">
            ʚ☻ɞ
          </span>
        </div>
        <span>work</span>
      </router-link>
      <router-link to="/development" class="apps__btn" :class="{active : dev}">
        <div class="icon icon--dev">
          <span class="icon__inner">꩜˖*</span>
        </div>
        <span>dev</span>
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
