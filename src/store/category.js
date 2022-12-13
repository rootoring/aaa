import { createStore } from 'vuex'
import axios from 'axios'
console.log(axios)

export default createStore({
  state: {
    categories:[]
  },
  getters: {
  },
  mutations: {
    setCategories(state, data){
      state.categories = data
    }
  },
  actions: {
    async fetchCategories({commit}){
      const city_id = JSON.parse( localStorage.getItem('city'))
      console.log(JSON.parse( localStorage.getItem('city')))
      let { data } = await axios.get(`https://nlstar.com/ru/api/catalog3/v1/menutags/?city_id=${city_id}`)
      commit('setCategories', data)
    }
  }
})
