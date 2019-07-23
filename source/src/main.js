import Vue from 'vue'
import App from './App.vue'
import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'

Vue.use(SequentialEntrance);

new Vue({
  el: '#app',
  render: h => h(App)
})
