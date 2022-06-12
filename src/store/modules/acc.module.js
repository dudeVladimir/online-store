import axios from 'axios'
import store from '..'
import router from './../../router/index'
import { error } from './../../utils/error'

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
      try {
        const { data } = await axios.get(
          `https://online-store-vue-default-rtdb.firebaseio.com/${store.getters['auth/localId']}.json?auth=${store.getters['auth/token']}`
        )
        commit('setAcc', data)
      } catch (e) {
        router.push('/auth')
        store.dispatch('message/setMessage', {
          title: 'ошибка',
          body: error(e.response.data.error),
        })
      }
    },
  },
  getters: {
    acc(state) {
      return state.acc
    },
    orders(state) {
      if (state.acc.orders) {
        return Object.keys(state.acc.orders).map((key) => {
          return { id: key, ...state.acc.orders[key] }
        })
      } else {
        return null
      }
    },
  },
}
