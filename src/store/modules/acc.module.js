import axios from 'axios'
import store from '..'

export default {
  namespaced: true,
  state() {
    return {
      acc: {},
      localId: localStorage.getItem('local-id'),
    }
  },
  mutations: {
    setAcc(state, acc) {
      state.acc = acc
    },
  },
  actions: {
    async loadAccInfo({ commit }) {
      const { data } = await axios.get(
        `https://online-store-vue-default-rtdb.firebaseio.com/${store.getters['auth/localId']}.json?auth=${store.getters['auth/token']}`
      )
      commit('setAcc', data)
    },
  },
  getters: {
    acc(state) {
      return state.acc
    },
  },
}
