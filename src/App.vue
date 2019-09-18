<template>
  <div id="app">
    <div class="row">
      <div class="col s12 m3 l2 red darken-1" id="sidenav-col"><SideMenu/></div>
      <div class="col s12 m9 l10"><div class="container"><router-view/></div></div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import SideMenu from './components/SideMenu.vue'

export default {
  name: 'app',
  components: {
    Header,
    SideMenu
  }
}
</script>

<style>
#sidenav-col{
  margin: 0px !important;
  padding: 0px !important;
  min-height: 100vh;
}
.row{ 
  margin: 0px;
}
</style>
