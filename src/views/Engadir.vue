<template>
<v-container fluid>
<v-content class="mr-10">
  <h1 v-if="!superSignedIn">Error 404</h1>
    <form v-if="superSignedIn">
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
        <v-btn block class="ma-4 success" @click="submit">Engadir</v-btn>
    </form>
    <h2>Vista previa</h2>
    <v-container v-html="contido">
    </v-container>
</v-content>
</v-container>
</template>
<script>
import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import MonacoEditor from 'vue-monaco'
export default {
    components: {
        MonacoEditor
    },
    data(){
        return {
          titulo: '', 
          contido: '<p>Ola, escribe aquí HTML.</p>', 
          tipo: 'Tarefa',
          trimestre: 1
        }
    },
    methods: {
        submit: function(e){
            let timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                titulo: this.titulo,
                contido: this.contido,
                creacion: timestamp
            }
            firebase.firestore().collection(this.collection).doc().set(data);
            this.titulo = '';
            this.contido = '';
            this.tipo = 'Tarefa';
            this.trimestre = 1;
        },
        processContent: function(content) {
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
        options: function(){
        if(this.$vuetify.theme.dark){
            return {
            language: 'html',
            theme: 'vs-dark'
            }
        }
        else return {
            language: 'html',
            theme: 'vs-light'
            }
        }
    },
    props: ['superSignedIn']
}
</script>