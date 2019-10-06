<template>
<div>
<h1>{{proxecto.titulo}}</h1>
<v-row v-if="canEdit">
    <v-btn @click="eliminar()">Eliminar</v-btn>
</v-row>
<div v-html="proxecto.contido"></div>
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
    data(){
        return {
            proxecto: {},
            collection: 'proxectos'
        }
    },
    methods: {
        setSnapshot: function(trimestre){
            firebase.firestore().collection(trimestre).doc(this.$route.params.id).onSnapshot((snapshot) => {
                this.proxecto = snapshot.data();
            })
        },
        eliminar: function(){
            let conf = confirm('¿Estás seguro de querer eliminar esto?')
            if(conf) firebase.firestore().collection(this.collection).doc(this.$route.params.id).delete();
            this.$router.push({ name: 'proxectos' });
        }
    },
    created(){
        switch(this.$route.params.trimestre){
            case '1': this.collection = 'proxectos';
            break;
            case '2': this.collection = 'proxectos2';
            break;
            case '3': this.collection = 'proxectos3';
            break;
        }
        this.setSnapshot(this.collection);
    },
    computed: {
            canEdit(){
                if(window.sessionStorage.getItem('dasfargdgd') == 'sgdgdag'){
                return true;
                }
                else{
                return false;
                }
            }
        }
}
</script>
