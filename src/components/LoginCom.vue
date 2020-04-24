<template>
  <v-card>
    <v-card-title>
      Inicia sesión con Google para escribir comentarios
    </v-card-title>
    <v-card-text class="text-center">
      <v-btn @click="login" color="info">Iniciar sesión</v-btn>
    </v-card-text>
  </v-card>
</template>
<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  methods: {
    login: function () {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
      firebase.auth().getRedirectResult();
    },
  },
};
</script>
