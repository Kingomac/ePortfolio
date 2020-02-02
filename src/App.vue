<template>
  <v-app id="inspire">
    <v-navigation-drawer color="primary" v-model="drawer" app clipped>
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
              <v-img alt="google"
                src="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png"
                width="18px" style="display:inline-block" /> Iniciar sesión
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

    <v-app-bar color="primary" app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>ePortfolio de Mario</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content :style="'background-color:' + $vuetify.theme.currentTheme.secondary">
      <v-container justify="center" class="p-2" fluid>
        <router-view :superSignedIn="superSignedIn" :signedIn="signedIn" />
      </v-container>
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
    created() {
      this.$vuetify.theme.dark = true;
    },
    mounted() {
      this.getSuperEmails();
    },
    methods: {
      checkStartUser: function () {
        if (firebase.auth().currentUser) {
          this.signedIn = true;
          if (this.superEmails.includes(firebase.auth().currentUser.email)) {
            this.superSignedIn = true;
          }
        }
      },
      checkSignIn: function () {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            this.signedIn = true;
            if (this.superEmails.includes(user.email)) {
              this.superSignedIn = true;
            } else {
              this.superSignedIn = false;
            }
          } else {
            this.signedIn = false;
            this.superSignedIn = false;
          }
        })
      },
      signIn: function () {
        firebase.auth().signOut();
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        firebase.auth().signInWithPopup(provider);
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
      },
      logOut: function () {
        firebase.auth().signOut();
      },
      getSuperEmails() {
        firebase.firestore().collection('admins').get().then((collection) => {
          collection.forEach((doc) => {
            this.superEmails.push(doc.data().email);
          })
        }).then(() => {
          this.checkStartUser();
          this.checkSignIn();
        })
      }
    }
  }
</script>
<style>
a{
  color: white !important;
}
</style>