# ePortfolio

## Scripts e instalación de desenvolvemento
Primeiro instalar as dependencias ````npm install````, despois para montar un servidor de desenvolvemento ````npm run serve```` e para facer unha compilación de produción ````npm run build````.

## Ficheiro de configuración
Para que todo funcione é necesario facer un ficheiro ````app.config.js```` na raíz do proxecto co seguinte esquema:
```` javascript
module.exports = {
  firebase_config: {
    apiKey: "api-key",
    authDomain: "project-id.firebaseapp.com",
    databaseURL: "https://project-id.firebaseio.com",
    projectId: "project-id",
    storageBucket: "project-id.appspot.com",
    messagingSenderId: "sender-id",
    appID: "app-id"
  }
}
````

### Feito con
- [Vue.js](https://github.com/vuejs/vue)
- [Vue-router](https://github.com/vuejs/vue-router)
- [Vuex](https://github.com/vuejs/vuex)
- [Vuetify](https://github.com/vuetifyjs/vuetify)
- [Vue Monaco](https://github.com/egoist/vue-monaco)
- [Moment](https://github.com/moment/moment/)
- [Firebase](https://github.com/firebase/firebaseui-web)