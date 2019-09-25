<template>
<div style="width:100%">
  <h1>Proxectos</h1>
    <v-container fluid>
        <v-row justify="center">
        <v-col>
            <h2>1º Trimestre</h2>
            <v-list>
            <linktarefa v-for="p in proxectos" :to="'/proxectos/1/' + p.id" :key="p.id" :text="p.titulo"/>
            </v-list>
        </v-col>
        <v-col>
            <h2>2º Trimestre</h2>
            <v-list>
            <linktarefa v-for="p in proxectos2" :to="'/proxectos/2/' + p.id" :key="p.id" :text="p.titulo"/>
            </v-list>
        </v-col>
        <v-col>
            <h2>3º Trimestre</h2>
            <v-list>
            <linktarefa v-for="p in proxectos3" :to="'/proxectos/3/' + p.id" :key="p.id" :text="p.titulo"/>
            </v-list>
        </v-col>
        </v-row>
    </v-container>
</div>
</template>
<script>
import Vue from 'vue'
import firebase from 'firebase'
import linktarefa from '../components/LinkTarefa.vue'
export default {
  components:{
    linktarefa
  },
  data(){
    return {
      colors: ['red lighten-5', 'red lighten-4', 'red lighten-3', 'red lighten-2', 'red lighten-1', 'red darken-1', 'red darken-2', 'red darken-3', 'red darken-4', 'red accent-1', 'red accent-2', 'red accent-3', 'red accent-4'],
      proxectos: [],
      proxectos2: [],
      proxectos3: [],
    }
  },
  methods: {
    setSnapshot: function(trimestre){
      let array = [];
      firebase.firestore().collection(trimestre).orderBy('creacion').onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          let data = {
            id: doc.id,
            titulo: doc.data().titulo
          }
          array.push(data);
          console.log(data);
        })
      })
      return array;
    }
  },
  created(){
    this.proxectos = this.setSnapshot('proxecto');
    this.proxectos2 = this.setSnapshot('proxectos2');
    this.proxectos3 = this.setSnapshot('proxectos3');
  }
  }
</script>
