<template>
  <div>
      <CategoryList />   
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryList from '@/components/CategoryList.vue'

export default {
  name: 'HomeView',
  components: {
    CategoryList
  },
  computed:{
    aa(){
      return JSON.parse( localStorage.getItem('city'))
    }
  }
}
</script>
