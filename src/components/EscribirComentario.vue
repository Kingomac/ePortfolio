<template>
  <v-card class="my-2" width="50%">
    <v-card-title>
      <span class="headline">Escribir un comentario</span>
    </v-card-title>
    <v-card-text>
      <v-textarea height="100" auto-grow clearable outlined v-model="texto" />
      <v-btn block color="primary" click="publicarComentario">Publicar</v-btn>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import Vue from "vue";
import firebase from "firebase/app";
import "firebase/firestore";
export default Vue.extend({
  data() {
    return {
      texto: "",
    };
  },
  methods: {
    publicarComentario: function () {
      if (this.texto !== "") {
        const data = {
          usuario: firebase.auth().currentUser.displayName,
          contenido: this.texto,
          tarefa: this.$route.params.id,
          creado: firebase.firestore.FieldValue.serverTimestamp(),
        };
        firebase.firestore().collection("comentarios_tarefas").doc().set(data);
        this.texto = "";
      }
    },
  },
});
</script>
