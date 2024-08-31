<template>
  <div class="app">
    <div class="app__item">
      <img src={coverImg} alt={coverImgAlt}>
    </div>
    <div class="app__expanded">
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkApp',
  props: {
    coverImg,
    coverImgAlt
  },
  methods: {
  }
}
</script>
