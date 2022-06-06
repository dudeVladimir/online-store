import { createStore } from 'vuex'
import axios from 'axios'
import thing from './modules/thing.module'
import category from './modules/category.module'

export default createStore({
  state() {
    return {
      things: [],
    }
  },
  getters: {
    things(state) {
      return state.things
    },
  },
  mutations: {
    setThings(state, things) {
      state.things = things
    },
  },
  actions: {
    async loadThings({ commit }) {
      const { data } = await axios.get('https://fakestoreapi.com/products')
      commit('setThings', data)
    },
  },
  modules: {
    thing,
    category,
  },
})
