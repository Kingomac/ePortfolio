<template>
<div style="width:100%">
  <h1>Proxectos</h1>
    <v-container fluid>
      <p>En construcción...</p>
    <div v-for="color in colors" :key="color">
    <v-progress-linear
      indeterminate
      :color="color"/>
    <br>
    <br>
      </div>
      <!--
        <v-row justify="center">
        <v-col>
            <h2>1º Trimestre</h2>
            <v-list>
            <linktarefa v-for="p in proxectos" :to="'/proxectos/1/' + t.id" :key="p.id" :text="p.title"/>
            </v-list>
        </v-col>
        <v-col>
            <h2>2º Trimestre</h2>
            <v-list>
            <linktarefa v-for="p in proxectos" :to="'/proxectos/2/' + t.id" :key="p.id" :text="p.title"/>
            </v-list>
        </v-col>
        <v-col>
            <h2>3º Trimestre</h2>
            <v-list>
            <linktarefa v-for="p in proxectos" :to="'/proxectos/3/' + t.id" :key="p.id" :text="p.title"/>
            </v-list>
        </v-col>
        </v-row>-->
    </v-container>
</div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data(){
    return {
      colors: ['red lighten-5', 'red lighten-4', 'red lighten-3', 'red lighten-2', 'red lighten-1', 'red darken-1', 'red darken-2', 'red darken-3', 'red darken-4', 'red accent-1', 'red accent-2', 'red accent-3', 'red accent-4']
    }
  }
})
</script>
