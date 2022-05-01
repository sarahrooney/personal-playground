<template>
  <div class="dev">
    <div class="dev__cntnt">
      <div class="txt">
        <h1>web development</h1>
      </div>
    </div>

    <Menu v-bind:about="true" v-bind:work="true" v-bind:dev="false"/>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue'

export default {
  name: 'Development',
  components: {
    Menu
  }
};
</script>
