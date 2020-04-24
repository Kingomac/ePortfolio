<template>
  <div>
    <v-row class="my-2" justify="center">
      <v-progress-circular class="my-3" indeterminate v-if="loading" />
    </v-row>
    <v-row class="my-1" justify="center">
      <v-col cols="4" v-for="a in animes" :key="a.nome">
        <v-card width="550px">
          <v-img width="550px" height="300px" :src="a.imaxe">
            <v-card-title style="background: rgba(0, 0, 0, 0.4); color: white;">
              {{ a.nome }}
            </v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      animes: [],
      loading: false,
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
    request.open(
      "GET",
      "https://raw.githubusercontent.com/Kingomac/ePortfolio/dev/src/assets/recommendations.json"
    );
    request.send();
  },
};
</script>
