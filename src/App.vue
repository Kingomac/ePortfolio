<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item v-for="n in navigation" :key="n.url" :to="n.url">
          <v-list-item-title class="white--text">{{
            n.text
          }}</v-list-item-title>
        </v-list-item>
        <v-list-item v-if="superSignedIn" to="/engadir">
          <v-list-item-content>
            <v-list-item-title class="white--text"
              >Crear tarefa/proxecto</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="!signedIn" @click="signIn">
          <v-list-item-content>
            <v-list-item-title class="white--text">
              <v-img
                alt="google"
                src="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png"
                width="18px"
                style="display: inline-block;"
              />
              Iniciar sesión
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="signedIn" @click="logOut">
          <v-list-item-content>
            <v-list-item-title class="white--text">
              Cerrar sesión
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon
        class="white--text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="white--text">ePortfolio de Mario</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="setTheme">
        <v-icon class="white--text" v-if="$vuetify.theme.dark">wb_sunny</v-icon>
        <v-icon class="white--text" v-else>brightness_3</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container justify="center" class="p-2" fluid>
        <router-view
          :navigation="navigation"
          :superSignedIn="superSignedIn"
          :signedIn="signedIn"
        />
      </v-container>
    </v-content>
    <v-footer app>
      <span class="white--text">&copy; {{ getYear }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    signedIn: false,
    superSignedIn: false,
    superEmails: [],
    navigation: [
      {
        text: "Inicio",
        url: "/",
      },
      {
        text: "Tarefas",
        url: "/tarefas",
      },
      {
        text: "Proxectos",
        url: "/proxectos",
      },
      {
        text: "Sobre este ePortfolio",
        url: "/sobre-este-eportfolio",
      },
      {
        text: "Sobre min",
        url: "/sobre-min",
      },
    ],
  }),
  computed: {
    getYear: function () {
      let date = new Date(Date.now());
      return date.getFullYear();
    },
  },
  mounted() {
    this.getSuperEmails();
    this.loadTheme();
  },
  methods: {
    setTheme: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      window.localStorage.setItem(
        "darkTheme",
        JSON.stringify(this.$vuetify.theme.dark)
      );
    },
    loadTheme: function () {
      let stored = window.localStorage.getItem("darkTheme");
      this.$vuetify.theme.dark = JSON.parse(stored);
    },
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
      });
    },
    signIn: function () {
      firebase.auth().signOut();
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("profile");
      firebase.auth().signInWithRedirect(provider);
      firebase.auth().getRedirectResult();
    },
    logOut: function () {
      firebase.auth().signOut();
    },
    getSuperEmails() {
      firebase
        .firestore()
        .collection("admins")
        .get()
        .then((collection) => {
          collection.forEach((doc) => {
            this.superEmails.push(doc.data().email);
          });
        })
        .then(() => {
          this.checkStartUser();
          this.checkSignIn();
        });
    },
  },
};
</script>
