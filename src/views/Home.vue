<template>
  <v-container class="home">
    <h1>ePortfolio TIC's 2º Bac</h1>
    <div style="overflow-x: visible;">
      <v-bottom-navigation>
        <v-btn v-for="n in navigation" :key="n.url" :to="n.url">
          <span class="white--text">{{ n.text }}</span>
        </v-btn>
      </v-bottom-navigation>
    </div>
    <v-row>
      <v-col sm="12" md="6">
        <UltimaTarefa />
      </v-col>
      <v-col sm="12" md="6">
        <ProxectosDestacados />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UltimaTarefa from "../components/UltimaTarefa";
import ProxectosDestacados from "../components/ProxectosDestacados";
export default {
  name: "home",
  components: {
    UltimaTarefa,
    ProxectosDestacados,
  },
  props: ["navigation"],
};
</script>
