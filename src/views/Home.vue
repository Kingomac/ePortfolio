<template>
  <v-container class="home">
    <h1>ePortfolio TIC's 2º Bac</h1>
    <v-bottom-navigation>
      <v-btn to="/tarefas">
        <span>Tarefas</span>
      </v-btn>
      <v-btn to="/proxectos">
        <span>Proxectos</span>
      </v-btn>
      <v-btn to="/sobre-este-eportfolio">
        <span>Sobre este ePortfolio</span>
      </v-btn>
      <v-btn to="/sobre-min">
        <span>Sobre min</span>
      </v-btn>
    </v-bottom-navigation>
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
    ProxectosDestacados
  }
};
</script>
