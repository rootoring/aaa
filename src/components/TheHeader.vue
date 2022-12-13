<template>
    <header class="header">
        <div class="contaner">
            <div class="header__content">
                <div class="header__location" @click="changeStatus(true)">
                    <i class="fas fa-map-marker-alt"></i>
                    <span class="header__location-city">{{currentCity.city}}</span> 
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
export default {
data(){
    return{
        cityName:''
    }
},
watch:{
  async  cityName(){
    if(this.cityName.length >= 3)
    await this.search(this.cityName)
  }
},
methods:{
  ...mapActions({
      search: 'citySearch',
      check:'checkDefaultCity'
  }),
  ...mapMutations({
      changeStatus: 'setStausCitySearch'
    })
},

computed:{
  currentCity(){
    return JSON.parse( localStorage.getItem('city') )
  }
},
  async mounted(){
    await this.check()
  }
}
</script>
