import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: () =>
        import ('./views/Home.vue')
    },
    {
      path: '/tarefas',
      name: 'tarefas',
      component: () =>
        import ('./views/Tarefas.vue')
    },
    {
      path: '/tarefas/:trimestre/:id',
      name: 'tarefa-completa',
      component: () =>
        import ('./views/TarefaCompleta.vue')
    },
    {
      path: '/proxectos',
      name: 'proxectos',
      component: () =>
        import ('./views/Proxectos.vue')
    },
    {
      path: '/engadir',
      name: 'engadir',
      component: () =>
        import ('./views/Engadir.vue')
    },
    {
      path: '/proxectos/:trimestre/:id',
      name: 'proxectos-completo',
      component: () =>
        import ('./views/ProxectoCompleto.vue')
    },
    {
      path: '/editar/:collection/:id',
      name: 'editar',
      component: () =>
        import ('./views/Editar.vue')
    }
  ]
})