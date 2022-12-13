import { createStore, storeKey } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    cities:[],
    categories:[],
    isActiveSearchCity: false
  },
  getters: {
    getCities(state){
      return state.cities
    },
    getCategories(state){
     return state.categories
    },
    getCityStatus(state){
      return state.isActiveSearchCity
    }
  },
  mutations: {
    setCities(state, cities){
      state.cities = cities
    },
    setCategories(state, data){
      state.categories = data
    },
    setStausCitySearch(state, aaa){
      state.isActiveSearchCity = aaa;
    }
  },
  actions: {
    async citySearch({commit}, cityName ){
      const {data} = await axios.get(`https://nlstar.com/api/catalog3/v1/city/?term=${cityName}&country=ru`)
      console.log(data.data)
      commit('setCities', data.data)
    
      return data.data  
    },

    async checkDefaultCity({commit,dispatch}){

      if(!localStorage.getItem('city')){      
        const cities = await dispatch('citySearch', 'Новосибирск')
        let searchCity = cities.find(i => i.id == 1)
        localStorage.setItem('city',JSON.stringify(searchCity))        
       await dispatch('fetchCategories')
      }

      else await dispatch('fetchCategories')
    },

    async fetchCategories({commit}){
      const city_id = JSON.parse( localStorage.getItem('city'))
      let { data } = await axios.get(`https://nlstar.com/ru/api/catalog3/v1/menutags/?city_id=${city_id.id}`)
      commit('setCategories', data.tags)
    }
  }
})
