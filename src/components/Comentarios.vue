<template>
  <v-row>
    <v-col sm="12" md="3" v-for="com in comentarios" v-bind:key="com.index">
      <v-card class="mx-auto">
        <v-card-text>
          <div>{{ com.creacion }}</div>
          <p class="headline text--primary">
            {{ com.usuario }}
          </p>
          <div class="text--primary">
            {{ com.contenido }}
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import firebase from "firebase/app";
import "firebase/app";
import moment from "moment";
export default {
  data() {
    return {
      comentarios: [],
    };
  },
  props: ["tarefa"],
  methods: {
    cargarComentarios: function () {
      firebase
        .firestore()
        .collection("comentarios_tarefas")
        .orderBy("creado", "desc")
        .onSnapshot((collection) => {
          this.comentarios = [];
          collection.forEach((doc, index) => {
            if (doc.data().tarefa == this.tarefa) {
              const data = {
                index: index,
                usuario: doc.data().usuario,
                contenido: doc.data().contenido,
                creacion: moment(doc.data().creado.toDate()).fromNow(),
              };
              this.comentarios.push(data);
            }
          });
        });
    },
  },
  mounted() {
    moment.locale("gl");
    this.cargarComentarios();
  },
};
</script>
