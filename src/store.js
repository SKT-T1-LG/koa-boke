import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:localStorage.getItem("token") || "",
    name:localStorage.getItem("name"),
    id:localStorage.getItem("id"),
  },
  mutations: {
    setToken(state, token){
      state.token = token
    },
    setName(state, name){
      state.name = name
    },
    setId(state, id){
      state.id = id
    }
  },
  actions: {

  }
})
