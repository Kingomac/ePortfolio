<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item to="/">
          <v-list-item-content>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/tarefas">
          <v-list-item-content>
            <v-list-item-title>Tarefas</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/proxectos">
          <v-list-item-content>
            <v-list-item-title>Proxectos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>ePortfolio de Mario</v-toolbar-title>
    </v-app-bar>

    <v-content>
        <v-row
          justify="center"
        >
        <v-container
        class="fill-height px-8 py-6"
        fluid
      >
        <router-view/>
        </v-container>
        </v-row>
      
    </v-content>

    <v-footer app>
      <span>&copy; 2019 <router-link style="color: transparent" to="/engadir">Engadir</router-link></span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>
