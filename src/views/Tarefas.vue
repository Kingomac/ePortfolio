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
    import firebase from 'firebase'

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
        beforeMount() {
            this.collections.forEach((col) => {
                this.initializeFirestore(col);
            })
        },
        mounted() {
            this.collections.forEach((col) => {
                this.setSnapshot(col);
            })
        },
        methods: {
            resetTarefas: function(collection) {
                switch (collection) {
                    case 'tarefas':
                        this.tarefas = [];
                        break;
                    case 'tarefas2':
                        this.tarefas2 = [];
                        break;
                    case 'tarefas3':
                        this.tarefas3 = [];
                        break;
                }
            },
            initializeFirestore: function(collection) {
                this.resetTarefas(collection)
                console.log('Initializing Firebase...');
                firebase.firestore().collection(collection).orderBy('creacion').get().then((col) => {
                    col.forEach((doc) => {
                        this.tarefas.push({
                            id: doc.id,
                            title: doc.data().titulo,
                            content: doc.data().contido
                        })
                    })
                })
            },
            setSnapshot: function(collection) {
                firebase.firestore().collection(collection).orderBy('creacion').onSnapshot((snapshot) => {
                    this.resetTarefas(collection)
                    snapshot.forEach((doc) => {
                        this.tarefas.push({
                            id: doc.id,
                            title: doc.data().titulo,
                            content: doc.data().contido
                        });
                    })
                })
            },
            titleNormalize: function(title) {
                return title.split(' ').join('-').replace('¿', '').replace('¡', '').replace('?', '').replace('!', '').replace('é', 'e').toLowerCase();
            }
        }
    }
</script>
