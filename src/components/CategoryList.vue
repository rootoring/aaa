<template>
  <section class="contaner contaner-flex_col">
    <h1>Категории товаров</h1>
    <div class="categoryList">
        <TheCategory v-for="category of categories" :key="category.id"  :categoryData="category"/>
      
    </div>
  </section>
</template>

<script>
import TheCategory from "@/components/Category.vue"
import { mapActions, mapGetters } from "vuex";
export default {
  components:{
      TheCategory
  },
  methods:{
    ...mapActions({
     
    })
  },
  computed:{
    ...mapGetters({
      categories:'getCategories'
    })
  },
  async mounted(){
    
  }
}
</script>