<template>
    <div class="col-xs-12 col-sm-6">
        <div v-if="server">
            <p> Server #{{server.id}} - Status: {{server.status}}</p>
            <button @click="resetFn">Set to Normal</button>
        </div>
        <p v-else>Server Details are currently not updated</p>
    </div>
</template>
<script>
import { serverBus } from '../../main';
export default {
    data: function() {
        return {
            server: null
        }
    },
    created() {
      serverBus.$on('serverSelected', (server) => {
          this.server = server;
       });
    },
    methods: {
        resetFn() {
            this.server.status = 'Normal';
        }
    }
}
</script>

<style scoped>
    div {
        border: 1px solid red;
    }
</style>

