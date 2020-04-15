import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./plugins/store";

Vue.config.productionTip = false;

import { firebase_config } from "../app.config";
import * as firebase from "firebase/app";
import "firebase/auth";

firebase.initializeApp(firebase_config);

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");
