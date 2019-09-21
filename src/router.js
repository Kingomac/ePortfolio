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
      name: 'tarefa-01',
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
    }
  ]
})