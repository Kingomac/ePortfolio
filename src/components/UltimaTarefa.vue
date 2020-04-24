<template>
  <div>
    <h2>Últimas tarefas de cada trimestre:</h2>
    <v-card class="my-3" v-for="(t, index) in titulo" :key="t">
      <v-card-title>
        {{ t }}
      </v-card-title>
      <v-card-text v-html="contido[index]"> </v-card-text>
      <v-card-actions>
        <v-btn
          color="primary"
          text
          :to="'/tarefas/' + trimestre[index] + '/' + id[index]"
        >
          Ver tarefa completa
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import firebase from "firebase/app";
import "firebase/firestore";
export default {
  data() {
    return {
      titulo: [],
      contido: [],
      trimestre: [],
      id: [],
    };
  },
  mounted() {
    let cols = ["tarefas3", "tarefas2", "tarefas"];
    cols.forEach((col) => {
      firebase
        .firestore()
        .collection(col)
        .orderBy("creacion", "desc")
        .limit(1)
        .get()
        .then((tarefa) => {
          tarefa.forEach((doc) => {
            this.contido.push(doc.data().contido.slice(0, 700) + "...");
            this.titulo.push(doc.data().titulo);
            this.id.push(doc.id);
            this.trimestre.push(this.getTrimestre(col));
          });
        });
    });
  },
  methods: {
    getTrimestre: function (trim) {
      if (trim == "tarefas") return 1;
      else if (trim == "tarefas2") return 2;
      else return 3;
    },
  },
};
</script>
