<template>
  <v-list-item :to="to">
    <v-list-item-title class="white--text">{{ text }}</v-list-item-title>
  </v-list-item>
</template>
<script>
export default {
  name: "linktarefa",
  props: ["to", "text"],
};
</script>
