<template>
<v-container fluid>
<p v-if="contido.includes('img')">Para las imágenes usa la siguiente sintxis => <code>&lt;img=LINK&lt;w=TAMAÑO(100%, 1000px...)/img&gt;</code>. Así se sustituirá tu imagen por un montón de divs con clases para que tenga Lazy Load y sea responsive. La imagen se recortará para que tenga una relación de aspecto de 16:9</p>
<v-content class="mr-10">
  <h1>Engadir</h1>
  <v-row>
      <v-col>
  <v-text-field
  class="mt-3"
    v-model="tecnologia"
    type="password"
    label="Escribe la contraseña para poder añadir contenido"
    outlined
    />
    </v-col>
    <v-col>
        <v-btn class="mt-5" @click="this.storeCanEdit">Iniciar sesión</v-btn>
    </v-col>
  </v-row>
    <form v-if="sabeDeVue">
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
        return {titulo: '', contido: '', tipo: 'Tarefa', trimestre: 1, tecnologia: '', password: ''}
    },
    methods: {
        submit: function(e){
            let timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                titulo: this.titulo,
                contido: this.processContent(this.contido),
                creacion: timestamp
            }
            firebase.firestore().collection(this.collection).doc().set(data);
            
            this.titulo = '';
            this.contido = '';
            this.tipo = 'Tarefa';
            this.trimestre = 1;
        },
        getPassword: function(){
            firebase.firestore().collection('manager').doc('contraseña').get().then((e) => {
                this.password = e.data().pass;
            })
        },
        storeCanEdit: function(){
            if(this.tecnologia == this.password){
                window.sessionStorage.setItem('dasfargdgd', 'sgdgdag');
            }
        },
        processContent(content){
            return content.split('<img=').join('<div class="v-responsive v-image"><div class="v-responsive__sizer" style="padding-bottom: 56.25%;"></div><div class="v-image__image v-image__image--cover" style="background-image: url(&quot;').split('<w=').join('&quot;); background-position: center center;"></div><div class="v-responsive__content" style="width:').split('/img>').join('"></div></div>').replace(/(\r\n|\n|\r)/gm, "");
      }
    },
    computed:{
        collection(){
            switch(this.trimestre){
                case 1: if(this.tipo == 'Tarefa') return 'tarefas';
                        else return 'proxectos';
                        break;
                case 2: if(this.tipo == 'Tarefa') return 'tarefas2';
                        else return 'proxectos2';
                        break;
                case 3: if(this.tipo == 'Tarefa') return 'tarefas3';
                else return 'proxectos3';
                break;
                default: return 'error';
            }
        },
        sabeDeVue(){
                if(this.tecnologia == this.password){
                    return true;
                }
                else{
                    return false;
                }
        }
    },
    mounted(){
        this.getPassword();
    }
})
</script>