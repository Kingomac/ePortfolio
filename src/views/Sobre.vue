<template>
<v-container>
<p>Este ePortfolio foi creado con <v-img max-width="16px" style="display:inline-block" src="https://vuejs.org/images/logo.png"/> <a target="_blank" href="https://vuejs.org/">Vue.js</a>. Un framework de Javascript que permite a creación de webs que funcionan de maneira asíncrona co servidor, só fai peticións de compoñentes, por exemplo se ten que cargar unha páxina con varias vistas, só carga a navegación da páxina unha vez e o compoñente coa vista é o único que se lle pide ao servidor, polo tanto é máis eficiente. Tamén utiliza <v-img max-width="16px" style="display:inline-block" src="https://store.vuetifyjs.com/img/vuetify.23e83d53.png"/> <a target="_blank" href="https://vuetifyjs.com/es-MX/">Vuetify</a> para definir os estilos da páxina, que seguen os patróns de diseño do Material Design.</p>
<p>Tamén por <v-img max-width="16px" style="display:inline-block" src="https://cdn.worldvectorlogo.com/logos/firebase-1.svg"/> <a href="https://firebase.google.com/?hl=es-419">Firebase</a> de Google, usando o hosting, para poñer a páxina en liña e as bases de datos para almacenar todas as tarefas e proxectos. É realmente fácil de implementar e a base de datos (Firestore) bríndache unhas ferramentas moi boas. Desta ferramenta tamén se aproveitan os inicios de sesión con Google para publicar comentarios, o cal se complementa con <v-img src="https://www.stickpng.com/assets/images/58481018cef1014c0b5e494a.png" style="display:inline-block" max-width="16px"/><a href="https://momentjs.com/" target="_blank">Moment.js</a> para mostrar hai canto tempo se publicou.</p>
<p>Esta tecnoloxía, aínda que oculta para os usuarios, é moi útil para engadir as tarefas facilmente, é o <a target="_blank" href="https://github.com/microsoft/monaco-editor">Monaco Editor</a>. Un proxecto de código aberto de Microsoft que é a base do editor de código Visual Studio Code. Neste caso é <a target="_blank" href="https://github.com/egoist/vue-monaco">un compoñente específico de fácil implentación con Vue</a>. Para que o provedes, aquí tedes unha mostra na que podedes escribir HTML (Javascript hai que implementalo desde a consola do navegador):</p>
<v-row>
<v-col sm="12" md="6"><MonacoEditor style="height: 500px" v-model="code" :options="options"/></v-col>
<v-col sm="12" md="6" v-html="code"></v-col>
</v-row>
<p>Podes consultar o código fonte do proxecto en <a href="https://github.com/Kingomac/ePortfolio" target="_blank">Github</a>.</p>
</v-container>
</template>
<script>
import Vue from 'vue'
import MonacoEditor from 'vue-monaco'
export default {
  components:{
    MonacoEditor
  },
  data(){
    return{
      code: '<div class="display-1">Novidades!</div>\n<ul>\n<li>Enlace ao proxecto Anime Quiz, que superou as 10 descargas.</li>\n<li>Botóns para navegar entre as tarefas</li>\n<li>Actualización de dependencias</li>\n</ul>',
      options:{
        language: 'html',
        theme: 'vs-dark'
      }
    }
  }
}
</script>
