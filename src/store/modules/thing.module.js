import axios from 'axios'

export default {
  namespaced: true,
  state() {
    return {
      thing: {},
    }
  },
  mutations: {
    setThing(state, thing) {
      state.thing = thing
    },
  },
  actions: {
    async loadById({ commit }, id) {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      )
      commit('setThing', data)
    },
  },
}
