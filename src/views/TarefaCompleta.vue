<template>
<div>
<h1>{{title}}</h1>
<div v-html="content"></div>
</div>
</template>
<script>
import firebase, { firestore } from 'firebase'

export default {
    methods:{
        load: function(){
            console.log(this.trimestre);
            firebase.firestore().collection(this.trimestre).doc(this.$route.params.id).get().then((doc) => {
                this.title = doc.data().titulo;
                this.content = doc.data().contido;
            })
        },
        activateSnapshot: function(){
            firebase.firestore().collection(this.trimestre).doc(this.$route.params.id).onSnapshot((snapshot) => {
                this.title = snapshot.data().titulo;
                this.content = snapshot.data().contido;
            })
        },
    },
    computed:{
        trimestre(){
            switch(this.$route.params.trimestre){
                case 1: return 'tarefas';
                case 2: return 'tarefas2';
                case 3: return 'tarefas3';
                default: return 'tarefas';
            }
        }
    },
    data(){
        return { title: '', content: ''}
    },
    created(){
        this.load();
        this.activateSnapshot();
    }
}
</script>
