<template>
<v-container fluid>
    <v-content class="mr-10">
     <form v-if="superSignedIn">
        <v-row>
            <v-col>
        <v-select
        v-model="tipo"
        :items="['Tarefa', 'Proxecto']"
        label="Tipo"
        required/>
            </v-col>
            <v-col>
                <v-select
                v-model="trimestre"
                :items="[1,2,3]"
                label="Trimestre"
                required/>
            </v-col>
        </v-row>
        <v-text-field
        v-model="titulo"
        required
        label="Titulo"/>
        <MonacoEditor style="height: 500px" v-model="contido" :options="options"/>
        <v-btn class="mr-4 success" @click="save">Actualizar</v-btn>
    </form>
    <h2>Vista previa</h2>
    <v-container v-html="contido">
    </v-container>
    </v-content>
</v-container>
</template>
<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import MonacoEditor from 'vue-monaco'

export default {
    components:{
        MonacoEditor
    },
    methods:{
        intialize: function(){
            firebase.firestore().collection(this.collection).doc(this.id).get().then((resp) => {
                this.titulo = resp.data().titulo;
                this.contido = resp.data().contido;
                this.creacion = resp.data().creacion;
            });
            if(this.collection.includes('tarefa')) this.tipo = 'Tarefa';
            else this.tipo = 'Proxecto';
            if(this.collection.includes('2')) this.trimestre = 2;
            else if(this.collection.includes('3')) this.trimestre = 3;
            else this.trimestre = 1;
        },
        save: function() {
            let timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                titulo: this.titulo,
                contido: this.contido,
                creacion: this.creacion,
                actualizacion: timestamp
            }
            firebase.firestore().collection(this.collection).doc(this.id).set(data);
            this.$router.back();
        },
        unminify: function unminify(code) {
            return code.split('<').join('\n<').replace('\n</', '</').replace(' target="_blank"', '').slice(1);
        },
        processContent: function(content) {
            return content.split('<a ').join('<a target="_blank" ').replace(/(\r\n|\n|\r)/gm, "").replace("http://", "https://");
        }
        
    },
    data(){
        return {
            titulo: '',
            contido: '',
            tipo: '',
            trimestre: 1,
            creacion: '',
            collection: this.$route.params.collection,
            id: this.$route.params.id,
            options: {
                language: 'html',
                theme: 'vs-dark'
            }
        }
    },
    created(){
        this.intialize();
    },
    props: ['superSignedIn']
}
</script>
