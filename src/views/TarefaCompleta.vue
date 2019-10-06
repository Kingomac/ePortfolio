<template>
<div>
<v-row>
<v-col cols="8"><h1>{{title}}</h1></v-col>
<v-col cols="2"><v-btn color="error" v-if="canEdit" @click="eliminar()">Eliminar</v-btn></v-col>
<v-col cols="2"><v-btn v-if="canEdit" :to="'/editar/' + trimestre + '/' + this.$route.params.id" color="success">Editar</v-btn></v-col>
</v-row>
<div v-html="content"></div>
</div>
</template>
<style>
img{
  max-width: 100%;
  height: auto;
}
p{
    text-align: justify;
}
</style>
<script>
import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
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
        },
        canEdit(){
                if(window.sessionStorage.getItem('dasfargdgd') == 'sgdgdag'){
                return true;
                }
                else{
                return false;
                }
            }
    },
    data(){
        return { title: '', content: ''}
    },
    created(){
        this.activateSnapshot();
    }
}
</script>
