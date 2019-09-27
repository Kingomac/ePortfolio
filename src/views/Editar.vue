<template>
     <form v-if="sabeDeVue">
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
        <v-textarea
            v-model="contido"
            outlined
            label="Escribe HTML"
            required
            rows="20"/>
          <v-btn class="mr-4 success" @click="save">Actualizar</v-btn>
    </form>
</template>
<script>
import firebase, { initializeApp } from 'firebase'

export default {
    computed:{
        sabeDeVue: function(){
          if(window.sessionStorage.getItem('dasfargdgd') == 'sgdgdag'){
          return true;
          }
          else{
          return false;
          }
        }
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
                contido: this.processContent(this.contido),
                creacion: this.creacion,
                actualizacion: timestamp
            }
            firebase.firestore().collection(this.collection).doc(this.id).set(data);
        },
        processContent(content){
            return content.split('<img=').join('<div class="v-responsive v-image"><div class="v-responsive__sizer" style="padding-bottom: 56.25%;"></div><div class="v-image__image v-image__image--cover" style="background-image: url(&quot;').split('<w=').join('&quot;); background-position: center center;"></div><div class="v-responsive__content" style="width:').split('/img>').join('"></div></div>').replace(/(\r\n|\n|\r)/gm, "");
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
            id: this.$route.params.id
        }
    },
    created(){
        this.intialize();
    }
}
</script>
