<template>
<v-container>
<v-row>
<v-col cols="8"><h1>{{title}}</h1></v-col>
<v-col cols="2"><v-btn class="me-2" color="error" v-if="superSignedIn" @click="eliminar()">Eliminar</v-btn></v-col>
<v-col cols="2"><v-btn class="me-2" v-if="superSignedIn" :to="'/editar/' + trimestre + '/' + this.$route.params.id" color="success">Editar</v-btn></v-col>
</v-row>
<div v-html="content"></div>
<v-row>
    <v-col cols="12" md="6"><escribir-comentario v-if="signedIn"/></v-col>
    <v-col cols="12" md="6"><comentarios :tarefa="this.$route.params.id"/></v-col>
</v-row>
</v-container>
</template>
<style>
img{
  max-width: 100%;
  height: auto;
}
p, li{
    text-align: justify;
}
</style>
<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import EscribirComentario from '../components/EscribirComentario.vue'
import Comentarios from '../components/Comentarios.vue'

export default {
    components: {
        EscribirComentario,
        Comentarios
    },
    methods:{
        activateSnapshot: function(){
            firebase.firestore().collection(this.trimestre).doc(this.$route.params.id).onSnapshot((snapshot) => {
                this.title = snapshot.data().titulo;
                this.content = snapshot.data().contido;
            })
        },
        eliminar: function(){
            let conf = confirm('¿Estás seguro de querer eliminar esto?')
            if(conf) firebase.firestore().collection(this.trimestre).doc(this.$route.params.id).delete();
            this.$router.push({ name: 'tarefas' });
        }
    },
    computed:{
        trimestre(){
            switch(this.$route.params.trimestre){
                case '1': return 'tarefas';
                break;
                case '2': return 'tarefas2';
                break;
                case '3': return 'tarefas3';
                break;
                default: return 'tarefas';
            }
        }
    },
    data(){
        return { title: '', content: ''}
    },
    props: ['signedIn', 'superSignedIn'],
    created(){
        this.activateSnapshot();
    }
}
</script>
