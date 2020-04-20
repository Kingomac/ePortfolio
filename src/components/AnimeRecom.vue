<template>
  <div>
    <v-row class="my-2" justify="center">
      <v-progress-circular class="my-3" indeterminate v-if="loading" />
    </v-row>
    <v-row class="my-1" justify="center">
      <v-col cols="4" v-for="a in animes" :key="a.nome">
        <v-card>
          <v-img width="500px" height="300px" :src="a.imaxe">
            <v-card-title style="background:rgba(0,0,0,0.4)">
              {{ a.nome }}
            </v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import firebase from "firebase/app";
import "firebase/storage";
export default {
  data: function() {
    return {
      animes: [],
      loading: false
    };
  },
  mounted() {
    this.loading = true;
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState == 4) {
        if (request.status == 200) {
          this.animes = JSON.parse(request.responseText);
          this.animesVisible = true;
          this.loading = false;
        }
      }
    });
    firebase
      .storage()
      .ref()
      .child("recommendations.json")
      .getDownloadURL()
      .then(() => {
        request.open(
          "GET",
          "http://127.0.0.1:5500/src/assets/recommendations.json"
        );
        request.send();
      });
  }
};
</script>
