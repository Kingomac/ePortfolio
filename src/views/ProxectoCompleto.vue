<template>
<div>
<h1>{{proxecto.titulo}}</h1>
<div v-html="proxecto.contido"></div>
</div>
</template>
<script>
import firebase from 'firebase'
export default {
    data(){
        return {
            proxecto: {}
        }
    },
    methods: {
        setSnapshot: function(trimestre){
            firebase.firestore().collection(trimestre).doc(this.$route.params.id).onSnapshot((snapshot) => {
                this.proxecto = snapshot.data();
            })
        }
    },
    created(){
        switch(this.$route.params.trimestre){
            case '1': this.setSnapshot('proxectos');
            break;
            case '2': this.setSnapshot('proxectos2');
            break;
            case '3': this.setSnapshot('proxectos3');
            break;
        }
    } 
}
</script>
