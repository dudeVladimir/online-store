import axios from 'axios'
import { error } from './../../utils/error'
import store from '..'

export default {
  namespaced: true,
  state() {
    return {
      token: localStorage.getItem('jwt-token'),
      localId: localStorage.getItem('local-id'),
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem('jwt-token', token)
    },
    setLocalId(state, localId) {
      state.localId = localId
      localStorage.setItem('local-id', localId)
    },
    logout(state) {
      state.token = null
      state.localId = null
      localStorage.removeItem('jwt-token')
      localStorage.removeItem('local-id')
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
        commit('setLocalId', data.localId)
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
        commit('setLocalId', data.localId)
        await axios.put(
          `https://online-store-vue-default-rtdb.firebaseio.com/${data.localId}.json?auth=${data.idToken}`,
          { name: payload.name }
        )
        store.dispatch('message/setMessage', {
          title: 'успешно',
          body: 'Аккаунт успешно зарегистрирован',
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
    token(state) {
      return state.token
    },
    localId(state) {
      return state.localId
    },
    isAuthenticated(_, getters) {
      return !!getters.token
    },
  },
}
