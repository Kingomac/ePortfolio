import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    tarefas: [[], [], []]
  },
  mutations: {
    setTarefas(state, tarefas){
      state.tarefas = tarefas;
    }
  }
});