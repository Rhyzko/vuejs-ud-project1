<template>
  <li 
  class="list-group-item" 
  style="cursor: pointer" 
  @click="displayServerStatus">Server #{{ server.id }} - Status: {{ server.status }}</li>
</template>

<script>
import {serverBus} from '../../main'
export default {
  props: ['server'],
  methods: {
      displayServerStatus() {
          serverBus.$emit('serverSelected', this.server);
      }
  }
}
</script>
