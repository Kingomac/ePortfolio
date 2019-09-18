<template>
  <ul id="side-menu">
    <li><router-link to="/" class="waves-effect waves-light btn-flat">Inicio</router-link></li>
    <li>
      <router-link to="/tarefas" class="waves-effect waves-light btn-flat">Tarefas</router-link>
      <div class="collapsible-body">
        <p>Hello</p>
      </div>
    </li>
    <li><router-link to="/proxectos" class="waves-effect waves-light btn-flat">Proxectos</router-link></li>
    <li><router-link to="/sobre-min" class="waves-effect waves-light btn-flat">Sobre min</router-link></li>
  </ul>
</template>
<script>
export default {
  name: 'SideMenu'
}
</script>
<style>
#side-menu li a{
  width:100%;
  height:100%;
  text-align: center;
  padding: 10px 0px 10px 0px;
  font-weight: bold;
  color: white;
  margin: 0px !important;
}
#side-menu li{
  margin: 0px !important;
  padding: 0px !important;
}
#side-menu{
  margin-left: 0px !important;
  border-right: .5px solid red;
  padding: 0px !important;
}
</style>
