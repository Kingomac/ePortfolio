<template>
<div>
<h1>{{title}}</h1>
<div v-html="content"></div>
</div>
</template>
<script>
import firebase from 'firebase'

export default {
    methods:{
        load: function(){
            firebase.firestore().collection('tarefas').doc(this.$route.params.id).get().then((doc) => {
                this.title = doc.data().titulo;
                this.content = doc.data().contido;
            })
        }
    },
    data(){
        return { title: '', content: '' }
    },
    created(){
        this.load();
    }
}
</script>
