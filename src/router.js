import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sobre-min',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/tarefas',
      name: 'tarefas',
      component: () => import('./views/Tarefas.vue')
    },
    {
      path: '/tarefas/que-e-un-eportfolio',
      name: 'tarefa-01',
      component: () => import('./views/Tarefas/01.vue')
    },
    {
      path: '/proxectos',
      name: 'proxectos',
      component: () => import('./views/Proxectos.vue')
    }
  ]
})
