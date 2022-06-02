import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      things: [
        {
          id: 1,
          title: 'Vue',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolor fuga quos consectetur nemo quae fugit repellat.',
          price: 456,
        },
        {
          id: 2,
          title: 'Vue',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolor fuga quos consectetur nemo quae fugit repellat.',
          price: 456,
        },
        {
          id: 3,
          title: 'Vue',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolor fuga quos consectetur nemo quae fugit repellat.',
          price: 456,
        },
        {
          id: 4,
          title: 'Vue',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolor fuga quos consectetur nemo quae fugit repellat.',
          price: 456,
        },
        {
          id: 5,
          title: 'Vue',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolor fuga quos consectetur nemo quae fugit repellat.',
          price: 456,
        },
      ],
    }
  },
  getters: {
    things(state) {
      return state.things
    },
  },
  mutations: {},
  actions: {},
  modules: {},
})
