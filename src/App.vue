<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item to="/">
          <v-list-item-content>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/tarefas">
          <v-list-item-content>
            <v-list-item-title>Tarefas</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/proxectos">
          <v-list-item-content>
            <v-list-item-title>Proxectos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/sobre-este-eportfolio">
          <v-list-item-content>
            <v-list-item-title>Sobre este ePortfolio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="signedIn" to="/engadir">
          <v-list-item-content>
            <v-list-item-title>Crear tarefa/proxecto</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>ePortfolio de Mario</v-toolbar-title>
    </v-app-bar>

    <v-content>
        <v-row
          justify="center"
        >
        <v-container
        class="fill-height fill-width px-8 py-6"
        fluid
      >
        <router-view :signedIn="signedIn" />
        </v-container>
        </v-row>
      
    </v-content>

    <v-footer app>
      <span>&copy; 2019 <span style="color: transparent; cursor:default" @click="signIn">Engadir</span></span>
    </v-footer>
  </v-app>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      signedIn: false,
      superEmails: []
    }),
    created () {
      this.$vuetify.theme.dark = true;
    },
    mounted(){
      this.checkSignIn();
      this.getSuperEmails();
      console.log(this.superEmails);
    },
    methods:{
      checkSignIn: function(){
        firebase.auth().onAuthStateChanged((user) => {
           if(user && this.superEmails.includes(user.email)) this.signedIn = true;
           else this.signedIn = false;
        })
      },
      signIn: function(){
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
      },
      getSuperEmails(){
        firebase.firestore().collection('admins').get().then((collection) => {
          collection.forEach((doc) => {
            this.superEmails.push(doc.data().email);
          })
        })
      }
    }
  }
</script>
