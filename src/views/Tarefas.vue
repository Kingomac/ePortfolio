<template>
<div>
    <h1>Tarefas</h1>
    <v-container fluid>
        <v-row justify="center">
        <v-col>
            <h2>1º Trimestre</h2>
            <v-list>
            <linktarefa v-for="t in tarefas" :to="'/tarefas/' + t.id" :key="t.id" :text="t.title"/>
            </v-list>
        </v-col>
        <v-col>
            <h2>2º Trimestre</h2>
            <v-list>
            <linktarefa v-for="t in tarefas2" :to="'/tarefas/' + t.id" :key="t.id" :text="t.title"/>
            </v-list>
        </v-col>
        <v-col>
            <h2>3º Trimestre</h2>
            <v-list>
            <linktarefa v-for="t in tarefas3" :to="'/tarefas/' + t.id" :key="t.id" :text="t.title"/>
            </v-list>
        </v-col>
        </v-row>
    </v-container>
</div>
</template>
<script>
import linktarefa from '../components/LinkTarefa.vue'
import firebase from 'firebase'

function setSnapshot(collection){
    firebase.firestore().collection(collection).onSnapshot((snapshot) => {
        tarefas = [];
        snapshot.forEach((doc) => {
            tarefas.push({
                id: doc.id,
                title: doc.data().titulo,
                content: doc.data().contido
            });
        })
    });
} 

export default {
    components:{
        linktarefa        
    },
    data(){
        return { tarefas: [], collections: ['tarefas', 'tarefas2', 'tarefas3'] }
    },
    beforeMount(){
        this.collections.forEach((col) => {
            this.initializeFirestore(col);
        })
    },
    mounted(){
        this.collections.forEach((col) => {
            this.setSnapshot(col);
        })
    },
    methods: {
    initializeFirestore: function(collection){
        this.tarefas = [];
        console.log('Initializing Firebase...');
        firebase.firestore().collection(collection).get().then((col) => {
            col.forEach((doc) => {
                this.tarefas.push({
                    id: doc.id,
                    title: doc.data().titulo,
                    content: doc.data().contido
                })
            })
        })
      }
    }
}
</script>
