import Vue from 'vue'
import App from './App.vue'

export const serverBus = new Vue({
  methods: {
    resetToNormal(server) {
      this.$emit('serverReset', server);
    }
  }
});
new Vue({
  el: '#app',
  render: h => h(App)
})
