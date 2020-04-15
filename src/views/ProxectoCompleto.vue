<template>
  <div>
    <v-row>
      <v-col
        ><h1>{{ proxecto.titulo }}</h1></v-col
      >
      <v-col>
        <v-row v-if="superSignedIn">
          <v-btn
            icon
            v-if="superSignedIn"
            color="success"
            :to="'/editar/' + collection + '/' + this.$route.params.id"
          >
            <v-icon>edit</v-icon>
          </v-btn>
          <v-dialog
            v-if="superSignedIn"
            v-model="dialog"
            persistent
            max-width="290"
          >
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" icon color="error">
                <v-icon>delete_outline</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="headline">Queres borrar isto?</v-card-title>
              <v-card-text
                >Confirma se queres eliminar completamente este proxecto, mírao
                ben porque senón vaise ó carallo.</v-card-text
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" text @click="dialog = false"
                  >COMO!?!?!?!?!?</v-btn
                >
                <v-btn
                  color="green darken-1"
                  :loading="btnEliminando"
                  text
                  @click="eliminar"
                  >Tira pa diante
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </v-col>
    </v-row>
    <div v-html="proxecto.contido"></div>
  </div>
</template>
<style>
img {
  max-width: 100%;
  height: auto;
}
p {
  text-align: justify;
}
</style>
<script>
import firebase from "firebase/app";
import "firebase/firestore";
export default {
  data() {
    return {
      proxecto: {},
      collection: "proxectos",
      btnEliminando: false,
      dialog: false
    };
  },
  methods: {
    setSnapshot: function(trimestre) {
      firebase
        .firestore()
        .collection(trimestre)
        .doc(this.$route.params.id)
        .onSnapshot(snapshot => {
          this.proxecto = snapshot.data();
        });
    },
    eliminar: function() {
      let conf = confirm("¿Estás seguro de querer eliminar esto?");
      if (conf)
        firebase
          .firestore()
          .collection(this.collection)
          .doc(this.$route.params.id)
          .delete();
      this.$router.push({ name: "proxectos" });
    }
  },
  created() {
    switch (this.$route.params.trimestre) {
      case "1":
        this.collection = "proxectos";
        break;
      case "2":
        this.collection = "proxectos2";
        break;
      case "3":
        this.collection = "proxectos3";
        break;
    }
    this.setSnapshot(this.collection);
  },
  props: ["superSignedIn"]
};
</script>
