<template>
  <div>
    <v-row class="my-3" justify="center">
      <v-progress-circular class="my-3" indeterminate v-if="loading" />
    </v-row>
    <v-row class="my-1" justify="center">
      <v-tabs vertical v-model="tab">
        <v-tab v-for="r in repos" :key="r.full_name">
          {{ r.name }}
        </v-tab>
        <v-tabs-items v-model="tab">
          <v-tab-item v-for="r in repos" :key="r.full_name">
            <v-card flat>
              <v-card-text>
                <v-list>
                  <v-list-item>{{ r.description }}</v-list-item>
                  <v-list-item>Programado en: {{ r.language }}</v-list-item>
                  <v-list-item
                    >Creación: {{ r.created_at.slice(0, 10) }}</v-list-item
                  >
                  <v-list-item
                    >Última actualización:
                    {{ r.updated_at.slice(0, 10) }}</v-list-item
                  >
                </v-list>
              </v-card-text>
              <v-card-actions>
                <v-btn text target="_blank" :href="r.svn_url">
                  Ver en Github
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </v-row>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      repos: [],
      tab: null,
      loading: false,
    };
  },
  mounted() {
    this.loading = true;
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState == 4) {
        if (request.status == 200) {
          this.repos = JSON.parse(request.responseText);
          this.loading = false;
        }
      }
    });
    request.open("GET", "https://api.github.com/users/Kingomac/repos");
    request.send();
  },
};
</script>
