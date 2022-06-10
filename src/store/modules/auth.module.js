import axios from 'axios'
import { error } from './../../utils/error'
import store from '..'

export default {
  namespaced: true,
  state() {
    return {
      token: localStorage.getItem('jwt-token'),
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem('jwt-token', token)
    },
    logout(state) {
      state.token = null
      localStorage.removeItem('jwt-token')
    },
  },
  actions: {
    async login({ commit }, payload) {
      try {
        store.commit('clearMessage')
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_API_KEY}`
        const { data } = await axios.post(url, {
          ...payload,
          returnSecureToken: true,
        })
        commit('setToken', data.idToken)
      } catch (e) {
        store.dispatch('message/setMessage', {
          title: 'ошибка',
          body: error(e.response.data.error.message),
        })
      }
    },
    async signin({ commit }, payload) {
      try {
        store.commit('clearMessage')
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_API_KEY}`
        const { data } = await axios.post(url, {
          ...payload,
          returnSecureToken: true,
        })
        commit('setToken', data.idToken)
        console.log(payload)
        await axios.post(
          `https://online-store-vue-default-rtdb.firebaseio.com/${data.localId}/name.json?auth=${data.idToken}`,
          { name: payload.name }
        )
      } catch (e) {
        store.dispatch('message/setMessage', {
          title: 'ошибка',
          body: error(e.response.data.error.message),
        })
      }
    },
  },
  getters: {
    token(state) {
      return state.token
    },
    isAuthenticated(_, getters) {
      return !!getters.token
    },
  },
}
