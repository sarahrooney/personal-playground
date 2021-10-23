<template>
  <div id="main" class="main">
    <h1>Hello World</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view />
  </div>
</template>

<script lang="ts">
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'app',
    components: {
      HelloWorld
    }
  }
</script>
