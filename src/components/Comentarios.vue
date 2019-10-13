<template>
<div>
<v-card
    class="mx-auto mt-2"
    v-for="com in comentarios" v-bind:key="com.index"
  >
    <v-card-text>
      <div>{{com.creacion}}</div>
      <p class="headline text--primary">
        {{com.usuario}}
      </p>
      <div class="text--primary">
        {{com.contenido}}
      </div>
    </v-card-text>
  </v-card>
</div>
</template>
<script>
import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/app'
import moment from 'moment'
export default {
  data(){
    return{
      comentarios: []
    }
  },
  props: ['tarefa'],
  methods:{
    cargarComentarios: function(){
      firebase.firestore().collection('comentarios_tarefas').orderBy('creado', 'desc').onSnapshot((collection) => {
        this.comentarios = [];
        collection.forEach((doc, index) => {
          if(doc.data().tarefa == this.tarefa){
            const data = {
              index: index,
              usuario: doc.data().usuario,
              contenido: doc.data().contenido,
              creacion: moment(doc.data().creado.toDate()).fromNow()
            }
            this.comentarios.push(data);
          }
        })
      })
    }
  },
  mounted(){
    moment.locale('gl')
    this.cargarComentarios();
  }
}
</script>
