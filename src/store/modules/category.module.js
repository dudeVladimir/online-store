import store from '..'
import axios from 'axios'

export default {
  namespaced: true,
  state() {
    return {
      categoryList: [],
    }
  },
  mutations: {
    setCategory(state, categoryList) {
      state.categoryList = categoryList
    },
  },
  actions: {
    async loadCategory({ commit }) {
      const { data } = await axios.get(
        'https://fakestoreapi.com/products/categories'
      )
      commit(
        'setCategory',
        data.map((e) => {
          let categoryImg
          if (e === 'electronics') {
            categoryImg = '../assets/category/elec.png'
          } else if (e === 'jewelery') {
            categoryImg = '../assets/category/jew.png'
          } else if (e === `men's clothing`) {
            categoryImg = '../assets/category/men.png'
          } else if (e === `women's clothing`) {
            categoryImg = '../assets/category/women.png'
          }
          return { name: e, categoryImg }
        })
      )
    },
  },
}
