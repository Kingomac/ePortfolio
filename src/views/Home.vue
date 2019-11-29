<template>
  <v-container class="home">
    <h1>ePortfolio TIC's 2º Bac</h1>
    <p style="text-align: justify;">Chámome Mario e son estudante de 2º de bacharelato no IES Auga da Laxe. Estudei secundaria no IES Terra de Turonio. No meu tempo libre gústame ver anime, o meu favorito actualmente é <a target="_blank" href="https://www.crunchyroll.com/es-es/the-rising-of-the-shield-hero">The Rising of the Shield Hero</a>. Sei programar en C#, Javascript e PHP e o meu editor de código favorito é <a target="_blank" href="https://code.visualstudio.com/">Visual Studio Code</a>. Fixen unha páxina web de <a target="_blank" href="https://numeros-complejos.000webhostapp.com">números complexos</a> e este ePortfolio.</p>
    <v-bottom-navigation>
      <v-btn to="/tarefas">
        <span class="white--text">Tarefas</span>
      </v-btn>
      <v-btn to="/proxectos">
        <span class="white--text">Proxectos</span>
      </v-btn>
      <v-btn to="/sobre-este-eportfolio">
        <span class="white--text">Sobre este ePortfolio</span>
      </v-btn>
    </v-bottom-navigation>
    
  </v-container>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
}
</script>