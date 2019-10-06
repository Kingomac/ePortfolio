<template>
<v-container fluid>
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
        <MonacoEditor style="height: 500px" v-model="contido" :options="options"/>
        <v-btn class="mr-4 success" @click="submit">Engadir</v-btn>

    </form>
</v-content>
</v-container>
</template>
<script>
import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
import MonacoEditor from 'vue-monaco'
export default {
    components: {
        MonacoEditor
    },
    data(){
        return {
            titulo: '', contido: '', tipo: 'Tarefa', trimestre: 1, tecnologia: '', password: '',
            options: {
                language: 'html',
                theme: 'vs-dark'
            }
        }
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
        processContent(content) {
            return content.split('<a ').join('<a target="_blank" ').replace(/(\r\n|\n|\r)/gm, "").replace("http://", "https://");
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
}
</script>