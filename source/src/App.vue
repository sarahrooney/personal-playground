<template>
  <div id="app">

    <div class="home">
      <div class="home__bubbles">
        <sequential-entrance animation="fadeIn" delay="1800">
          <div class="home__bubble" v-for="(item, index) in messages" :key="index">
            <div class="home__bubble__tail"
              v-bind:class="item.last ? 'home__bubble__tail--active' : 'home__bubble__tail--inactive'"
              v-bind:style="{ animationDelay: index * 1500 + 'ms' }">
            </div>
            <span v-html="item.msg">
            </span>
          </div>
        </sequential-entrance>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      messages: [
        {
          msg: "hi! i'm a front-end developer and artist currently living and working in Chicago, IL ^___^"
        },
        {
          msg: "i've been reworking my site for a while now, sorry about that! in the meantime, check out <a href='https://drive.google.com/file/d/13wAaHNJNJo7LuuO1LgN4K1sGpFsjB1gZ/view?usp=sharing' target='_blank'>my work</a> with the <a href='https://www.mediaarchaeologylab.com/projects' target='_blank'>Media Archaeology Lab</a>."
        },
        {
          msg: "my CV is available <a href='https://docs.google.com/document/d/1xBTE-XqEK6XkJDirgz8oyHLrDkxgKjRqUS8ZSMpZAf8/edit?usp=sharing' target='_blank'>here</a> and you can shoot me an email <a href='mailto:rooney.sarah2@gmail.com'>here</a>.",
          last: true
        }
      ]
    }
  },
  methods: {
  }
}
</script>
