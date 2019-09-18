<template>
<div>
    <h1>Tarefas</h1>
    <div class="col trimestres">
        <h2 class="trimestre">1º Trimestre</h2>
        <div class="collection">
        <linktarefa to="tarefas/que-e-un-eportfolio" text="0.1 :: Qué un ePortfolio"/>
      </div>
    </div>   
</div>
</template>
<script>
import linktarefa from '../components/LinkTarefa.vue'

export default {
    components:{
        linktarefa        
    }
}
</script>
<style>
.trimestre{
    font-size: 22px;
}
.col.trimestres{
    border-right: .5px solid red;
    min-height: 50vh;
}
</style>
