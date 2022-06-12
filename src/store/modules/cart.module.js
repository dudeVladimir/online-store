import store from '..'
import axios from 'axios'
import { error } from './../../utils/error'

export default {
  namespaced: true,
  state() {
    return {
      order: JSON.parse(localStorage.getItem('order')) ?? [],
    }
  },
  mutations: {
    addItem(state, item) {
      const idx = state.order.findIndex((e) => e.id === item.id)
      if (idx !== -1) {
        state.order[idx].count += 1
        localStorage.setItem('order', JSON.stringify(state.order))
      } else {
        state.order.push({ ...item, count: 1 })
        localStorage.setItem('order', JSON.stringify(state.order))
      }
    },
    removeItem(state, id) {
      const idx = state.order.findIndex((e) => e.id === id)
      if (idx !== -1) {
        if (state.order[idx].count > 1) {
          state.order[idx].count -= 1
          localStorage.setItem('order', JSON.stringify(state.order))
        } else {
          state.order.splice(idx, 1)
          localStorage.setItem('order', JSON.stringify(state.order))
        }
      }
    },
    clearOrder(state) {
      state.order = []
      localStorage.removeItem('order')
    },
  },
  actions: {
    async createOrder({ commit }, payload) {
      try {
        await axios.post(
          `https://online-store-vue-default-rtdb.firebaseio.com/${localStorage.getItem(
            'local-id'
          )}/orders.json?auth=${localStorage.getItem('jwt-token')}`,
          payload
        )
        commit('clearOrder')
        store.dispatch('message/setMessage', {
          title: 'успешно',
          body: 'Заказ успешно создан',
        })
      } catch (e) {
        store.dispatch('message/setMessage', {
          title: 'ошибка',
          body: error(e.response.data.error.message),
        })
      }
    },
  },
  getters: {
    order(state) {
      return state.order
    },
    totalPrice(_, getters) {
      return getters.order
        .reduce((preVal, curEl) => (preVal += curEl.price * curEl.count), 0)
        .toFixed(2)
    },
  },
}
