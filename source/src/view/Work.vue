<template>
  <div class="work">
    <div class="work__cntnt">
      <div class="txt">
        <h1>works</h1>
      </div>
    </div>

    <Menu v-bind:about="true" v-bind:work="false" v-bind:dev="true"/>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue'

export default {
  name: 'Work',
  components: {
    Menu
  }
};
</script>
