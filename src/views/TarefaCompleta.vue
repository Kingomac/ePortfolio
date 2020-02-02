<template>
    <v-container>
        <v-row align="center">
            <h1 class="mr-3">{{title}}</h1>
            <v-btn @click="cdTarefa(-1)" icon>
                <v-icon>navigate_before</v-icon>
            </v-btn>
            <v-btn @click="cdTarefa(1)" icon>
                <v-icon>navigate_next</v-icon>
            </v-btn>
            <v-btn icon v-if="superSignedIn" color="success" :to="'/editar/' + trimestre + '/' + this.$route.params.id">
                <v-icon>edit</v-icon>
            </v-btn>
            <v-dialog v-if="superSignedIn" v-model="dialog" persistent max-width="290">
                <template v-slot:activator="{ on }">
                    <v-btn v-on="on" icon color="error">
                        <v-icon>delete_outline</v-icon>
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title class="headline">Queres borrar isto?</v-card-title>
                    <v-card-text>Confirma se queres eliminar completamente esta tarefa, mírao ben porque senón vaise ó
                        carallo.</v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="red darken-1" text @click="dialog = false">COMO!?!?!?!?!?</v-btn>
                        <v-btn color="green darken-1" :loading="btnEliminando" text @click="eliminar">Tira pa diante
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

        </v-row>
        <div class="mt-4" v-html="content"></div>
        <v-row>
            <v-col cols="12" md="6">
                <escribir-comentario v-if="signedIn" />
            </v-col>
            <v-col cols="12" md="6">
                <comentarios :tarefa="this.$route.params.id" />
            </v-col>
        </v-row>
    </v-container>
</template>
<style>
    img {
        max-width: 100%;
        height: auto;
    }

    p,
    li {
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
        methods: {
            activateSnapshot: function () {
                firebase.firestore().collection(this.trimestre).doc(this.$route.params.id).onSnapshot((
                    snapshot) => {
                    this.title = snapshot.data().titulo;
                    this.content = snapshot.data().contido;
                })
            },
            eliminar: function () {
                this.btnEliminando = true;
                firebase.firestore().collection(this.trimestre).doc(this.$route.params.id).delete().then(() => {
                    this.$router.push({
                        name: 'tarefas'
                    });
                });
            },
            cdTarefa: function (sumar) {
                if(this.$store.state.tarefas[this.$route.params.trimestre -1].length > 0) {
                    let tarefas = this.$store.state.tarefas[this.$route.params.trimestre -1];
                    let index = 0;
                    tarefas.forEach((item, i) => {
                        if (item.title == this.title) {
                            index = i;
                        }
                    })
                    if(typeof tarefas[index+sumar] !== 'undefined'){
                        let path =
                        `/tarefas/${this.$route.params.trimestre}/${tarefas[index+sumar].id}`;
                    this.$router.push({
                        path
                    })
                    this.activateSnapshot();
                    }
                    
                } else{
                firebase.firestore().collection(this.trimestre).orderBy('creacion').get().then((res) => {
                    let tarefas = [];
                    let index = 0;
                    let i = 0;
                    res.forEach((item) => {
                        if (item.data().titulo == this.title) {
                            index = i;
                        }
                        let data = item.data();
                        Object.assign(data, {id: item.id});
                        tarefas.push(data);
                        i++;
                    })
                    if(this.trimestre == 'tarefas'){
                        this.$store.commit('setTarefas', [tarefas, this.$store.state.tarefas[1], this.$store.state.tarefas[2]]);
                    }
                    else if(this.trimestre == 'tarefas2'){
                        this.$store.commit('setTarefas', [this.$store.state.tarefas[0], tarefas, this.$store.state.tarefas[2]]);
                    }
                    else{
                        this.$store.commit('setTarefas', [this.$store.state.tarefas[0], this.$store.state.tarefas[1], tarefas]);
                    }
                    i = 0;
                    res.forEach((item) => {
                        if (i == index + sumar) {
                            let path =
                                `/tarefas/${this.$route.params.trimestre}/${item.id}`;
                            this.$router.push({
                                path
                            })
                            this.activateSnapshot();
                        }
                        i++;
                    })

                })
                }
            }

        },
        computed: {
            trimestre() {
                switch (this.$route.params.trimestre) {
                    case '1':
                        return 'tarefas';
                        break;
                    case '2':
                        return 'tarefas2';
                        break;
                    case '3':
                        return 'tarefas3';
                        break;
                    default:
                        return 'tarefas';
                }
            }
        },
        data() {
            return {
                title: '',
                content: '',
                dialog: false,
                btnEliminando: false
            }
        },
        props: ['signedIn', 'superSignedIn', 'tarefas'],
        created() {
            this.activateSnapshot();
        }
    }
</script>