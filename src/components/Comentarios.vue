<template>
<v-card
    class="mx-auto"
  >
    <v-card-text>
      <div>{{fecha}}</div>
      <p class="display-1 text--primary">
        {{usuario}}
      </p>
      <p>adjective</p>
      <div class="text--primary">
        {{contenido}}
      </div>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data(){

  },
  methods:{

  }
})
</script>
