<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <server-status v-for="server in servers"
             :key="server.id" 
             :server="server"></server-status>
        </ul>
    </div>
</template>
<script>
import ServerStatus from './ServerStatus.vue';
export default {
  data: function() {
      return {
          servers: [
              { id: 1, status: 'Normal'},
              { id: 2, status: 'Critical'},
              { id: 3, status: 'Unknown'},
              { id: 4, status: 'Normal'},
          ] 
      };
  },
  methods : {
      
  },
  components: {
      'server-status' : ServerStatus
  }
}
</script>
