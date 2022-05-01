<template>
  <div class="phone">
    <h1 class="sr-only">Sarah Rooney</h1>
    <div class="phone-top"></div>
    <div class="phone-screen">
      <div class="overlay"></div>

      <div class="message">
        <p>
          hi! i'm sarah rooney, a front-end developer and artist living and working in Chicago, IL.
        </p>
      </div>
      <!-- <div class="message">
        <p>
          i've been reworking my site for a while now, sorry about that! in the meantime, check out <a href="https://drive.google.com/file/d/13wAaHNJNJo7LuuO1LgN4K1sGpFsjB1gZ/view?usp=sharing" target="_blank">my work</a> with the <a href="https://www.mediaarchaeologylab.com/projects" target="_blank">Media Archaeology Lab</a>.
        </p>
      </div>
      <div class="message">
        <p>
          my CV is available <a href="https://docs.google.com/document/d/1xBTE-XqEK6XkJDirgz8oyHLrDkxgKjRqUS8ZSMpZAf8/edit?usp=sharing" target="_blank">here</a> and you can email me <a href="mailto:rooney.sarah2@gmail.com">here</a>.
        </p>
      </div> -->
      <div class="message">
        <p>°˖✧◝(⁰▿⁰)◜✧˖°</p>
      </div>

      <div class="apps">
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
      </div>

    </div>

    <router-link to="/" class="home-button"></router-link>
  </div>
</template>

<script>
export default {};
</script>
