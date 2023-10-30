import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    artistas:['Rihanna','Dua Lipa','Olivia Rodrigo', 'Bruno Mars', 'Lady Gaga']
  },
  getters: {
  },
  mutations: {
    agregarArtista(state, nombre){
      state.artistas.push(nombre);
    },
    eliminarArtista(state, index){
      state.artistas.splice(index,1);
    },
    editArtista(state, {index, nuevoArtista}){
       state.artistas[index] = nuevoArtista;
    }
  },
  actions: {
  },
  modules: {
  }
})