<template>
  <div>
    <h1>Sobre min</h1>
    <p style="text-align: justify;">
      Chámome Mario e son estudante de 2º de bacharelato no IES Auga da Laxe.
      Estudei secundaria no IES Terra de Turonio. No meu tempo libre gústame ver
      anime, o meu favorito actualmente é
      <a
        target="_blank"
        href="https://www.crunchyroll.com/es-es/the-rising-of-the-shield-hero"
        >The Rising of the Shield Hero</a
      >. Sei programar en C#, Javascript e PHP e o meu editor de código favorito
      é
      <a target="_blank" href="https://code.visualstudio.com/"
        >Visual Studio Code</a
      >. Fixen unha páxina web de
      <a target="_blank" href="https://numeros-complexos.000webhostapp.com"
        >números complexos</a
      >
      e este ePortfolio.
    </p>
    <v-tabs show-arrows grow>
      <v-tab>
        Recomendacións de anime
      </v-tab>
      <v-tab>
        Repositorios de Github
      </v-tab>
      <v-tab-item>
        <AnimeRecom />
      </v-tab-item>
      <v-tab-item>
        <GithubRepos />
      </v-tab-item>
    </v-tabs>
  </div>
</template>
<script>
import AnimeRecom from "../components/AnimeRecom";
import GithubRepos from "../components/GithubRepos";
export default {
  components: {
    GithubRepos,
    AnimeRecom,
  },
};
</script>
