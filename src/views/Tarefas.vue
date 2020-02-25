<template>
<div style="width:100%">
    <h1>Tarefas</h1>
    <v-container fluid>
        <v-row justify="center">
        <v-col>
            <h2>1º Trimestre</h2>
            <v-list>
            <linktarefa v-for="t in tarefas" :to="'/tarefas/1/' + t.id" :key="t.id" :text="t.title"/>
            </v-list>
        </v-col>
        <v-col>
            <h2>2º Trimestre</h2>
            <v-list>
            <linktarefa v-for="t in tarefas2" :to="'/tarefas/2/' + t.id" :key="t.id" :text="t.title"/>
            </v-list>
        </v-col>
        <v-col>
            <h2>3º Trimestre</h2>
            <v-list>
            <linktarefa v-for="t in tarefas3" :to="'/tarefas/3/' + t.id" :key="t.id" :text="t.title"/>
            </v-list>
        </v-col>
        </v-row>
    </v-container>
</div>
</template>
<script>
    import linktarefa from '../components/LinkTarefa.vue'
    import firebase from 'firebase/app'
    import 'firebase/firestore'

    export default {
        components: {
            linktarefa
        },
        data() {
            return {
                tarefas: [],
                tarefas2: [],
                tarefas3: [],
                collections: ['tarefas', 'tarefas2', 'tarefas3']
            }
        },
        methods: {
            setSnapshot: function(collection) {
                let array = [];
                firebase.firestore().collection(collection).orderBy('creacion').onSnapshot((snapshot) => {
                    snapshot.forEach((doc) => {
                        let data = {
                            title: doc.data().titulo,
                            id: doc.id
                        }
                        let canSubmit = true;
                        array.forEach((item) => {
                            if(item.id == doc.id){
                                canSubmit = false;
                            }
                        })
                        if(canSubmit) array.push(data);
                    })
                })
                this.$store.commit('setTarefas', [this.tarefas,this.tarefas2, this.tarefas3])
                return array;
            }
        },
        created(){
            this.tarefas = this.setSnapshot('tarefas');
            this.tarefas2 = this.setSnapshot('tarefas2');
            this.tarefas3 = this.setSnapshot('tarefas3');
        },
    }
</script>
