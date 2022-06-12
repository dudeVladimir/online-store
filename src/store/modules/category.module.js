import axios from 'axios'

export default {
  namespaced: true,
  state() {
    return {
      categoryList: [],
      selectedCategory: '',
    }
  },
  mutations: {
    setCategory(state, categoryList) {
      state.categoryList = categoryList
    },
    setSelectedCategory(state, selectedCategory) {
      state.selectedCategory = selectedCategory
    },
  },
  actions: {
    async loadCategory({ commit, state }) {
      if (state.categoryList.length === 0) {
        const { data } = await axios.get(
          'https://fakestoreapi.com/products/categories'
        )
        commit(
          'setCategory',
          data.map((e) => {
            let categoryImg
            if (e === 'electronics') {
              categoryImg = 'elec'
            } else if (e === 'jewelery') {
              categoryImg = 'jew'
            } else if (e === `men's clothing`) {
              categoryImg = 'men'
            } else if (e === `women's clothing`) {
              categoryImg = 'women'
            } else {
              return
            }
            return { name: e, categoryImg }
          })
        )
      }
    },
    async loadByCategory({ commit }, payload) {
      commit('setSelectedCategory', payload)
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/category/${payload}`
      )
      commit('setThings', data, { root: true })
    },
  },
}
