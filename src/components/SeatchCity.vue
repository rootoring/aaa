<template>
  <div class="modalWindow" v-if="isActive">
    <div class="modalWindow__content">
      <p class="modalWindow__text">Выбор населённого пункта:</p>
      <span class="close-btn" @click="changeStatus(false)">+</span>
      <form  class="modalWindow__form">
      <div class="modalWindow__search">
        <input class="modalWindow__input" v-model="cityName" type="text" placeholder="Например, Санкт-петербург">
        <ul class="cities-Items">
          <li v-for="city of cities" :key="city.id" class="cities-Item" @click="cityChoice(city)">{{city.label}}</li>
        </ul>
      </div>
        <button class="btn">Подтвердить</button>
      </form>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';
export default {
  data(){
    return{
      cityName:'',
      selectedСity:{}
    }
  },
  methods:{
    ...mapMutations({
      changeStatus: 'setStausCitySearch'
    }),
    ...mapActions({
      citySearch: 'citySearch'
    }),
    cityChoice(city){
      this.selectedСity = JSON.stringify(city)
      this.cityName = city.label
    }
  },
  computed:{
    ...mapGetters({
      isActive:'getCityStatus',
      cities:'getCities'
    }),
    isInputActive(){
    return  this.cityName.length >= 3
    }
  },
  watch:{
    cityName(){
      this.citySearch(this.cityName)
    }
  }
}
</script>