<template>
<v-container fluid>
<p v-if="contido.includes('img')">Para las imágenes usa la siguiente sintxis => <code>&lt;img=LINK/img&gt;</code>. Así se sustituirá tu imagen por un montón de divs con clases para que tenga Lazy Load y sea responsive. La imagen se recortará para que tenga una relación de aspecto de 16:9</p>
<v-content class="mr-10">
  <h1>Engadir</h1>
          <form>
              <v-row>
                  <v-col>
              <v-select
              v-model="tipo"
              :items="['Tarefa', 'Proxecto']"
              label="Tipo"
              required/>
                  </v-col>
                  <v-col>
                      <v-select
                      v-model="trimestre"
                      :items="[1,2,3]"
                      label="Trimestre"
                      required/>
                  </v-col>
              </v-row>
              <v-text-field
              v-model="titulo"
              required
              label="Titulo"/>
              <v-textarea
                  v-model="contido"
                  outlined
                  label="Escribe HTML"
                  required
                  rows="20"/>
                <v-btn class="mr-4 success" @click="submit">Engadir</v-btn>
          </form>
</v-content>
</v-container>
</template>
<script lang="ts">
import Vue from 'vue'
import firebase from 'firebase'
export default Vue.extend({
    data(){
        return {titulo: '', contido: '', tipo: 'Tarefa', trimestre: 1}
    },
    methods: {
        submit: function(e){
            let timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                titulo: this.titulo,
                contido: this.processContent,
                creacion: timestamp
            }
            firebase.firestore().collection(this.collection).doc().set(data);
            
            this.titulo = '';
            this.contido = '';
            this.tipo = 'Tarefa';
            this.trimestre = 1;
        }
    },
    computed:{
        collection(){
            switch(this.trimestre){
                case 1: if(this.tipo == 'Tarefa') return 'tarefas';
                        else return 'proxecto';
                        break;
                case 2: if(this.tipo == 'Tarefa') return 'tarefas2';
                        else return 'proxecto2';
                        break;
                case 3: if(this.tipo == 'Tarefa') return 'tarefas3';
                else return 'proxecto3';
                break;
                default: return 'error';
            }
        },
        processContent(){
            return this.contido.split('<img=').join('<div class="v-responsive v-image"><div class="v-responsive__sizer" style="padding-bottom: 56.25%;"></div><div class="v-image__image v-image__image--cover" style="background-image: url(&quot;').split('/img>').join('&quot;); background-position: center center;"></div><div class="v-responsive__content" style="width: 100%;"></div></div>');
        }
    }
})
</script>