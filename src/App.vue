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
        <v-list-item v-if="superSignedIn" to="/engadir">
          <v-list-item-content>
            <v-list-item-title>Crear tarefa/proxecto</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="!signedIn" @click="signIn">
          <v-list-item-content>
            <v-list-item-title>
              <v-img alt="google" src="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png" width="18px" style="display:inline-block"/> Iniciar sesión
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
          <v-list-item v-if="signedIn" @click="logOut">
          <v-list-item-content>
            <v-list-item-title>
              Cerrar sesión
            </v-list-item-title>
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
        <router-view :superSignedIn="superSignedIn" :signedIn="signedIn" />
        </v-container>
        </v-row>
      
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
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
      superSignedIn: false,
      superEmails: []
    }),
    created () {
      this.$vuetify.theme.dark = true;
    },
    mounted(){
      this.checkSignIn();
      this.getSuperEmails();
    },
    methods:{
      checkSignIn: function(){
        firebase.auth().onAuthStateChanged((user) => {
           if(user){
             this.signedIn = true;
             this.superSignedIn = false;
           }
           if(user && this.superEmails.includes(user.email)) {
             this.signedIn = true;
             this.superSignedIn = true;
           }
           else {
              this.signedIn = false;
              this.superSignedIn = false;
           }
           console.log(this.signedIn, this.superSignedIn);
        })
      },
      signIn: function(){
        firebase.auth().signOut();
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
        firebase.auth().signInWithPopup(provider);
      },
      logOut: function(){
        firebase.auth().signOut();
      },
      getSuperEmails(){
        firebase.firestore().collection('admins').onSnapshot((collection) => {
          collection.forEach((doc) => {
            this.superEmails.push(doc.data().email);
          })
        })
      }
    }
  }
</script>
