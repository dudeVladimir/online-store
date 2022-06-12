import { createStore, createLogger } from 'vuex'
import axios from 'axios'
import thing from './modules/thing.module'
import category from './modules/category.module'
import auth from './modules/auth.module'
import message from './modules/message.module'
import acc from './modules/acc.module'
import cart from './modules/cart.module'

const plugins = []

if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger())
}

export default createStore({
  plugins,
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
    async loadThings({ commit, state }) {
      const { data } = await axios.get('https://fakestoreapi.com/products')
      if (data) {
        commit('setThings', data)
      }
    },
  },
  modules: {
    thing,
    category,
    auth,
    message,
    acc,
    cart,
  },
})
