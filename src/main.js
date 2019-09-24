import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyAoh5iLXwQFsLsd5NC9_enJgi6MWlreavQ",
  authDomain: "e-portfolio-2ffac.firebaseapp.com",
  databaseURL: "https://e-portfolio-2ffac.firebaseio.com",
  projectId: "e-portfolio-2ffac",
  storageBucket: "e-portfolio-2ffac.appspot.com",
  messagingSenderId: "758097992822",
  appId: "1:758097992822:web:9b0404b5bc415ec8b91357"
});
firebase.auth().signInWithEmailAndPassword('kingomacyt@gmail.com', 'javascript');


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')