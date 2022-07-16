import { getUser, setUser } from '@/utils'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    str: getUser() || {}
  },
  getters: {},
  mutations: {
    SetToken(state, token) {
      state.str = token
      setUser(state)
    }
  },
  actions: {},
  modules: {}
})
