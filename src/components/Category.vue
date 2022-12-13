<template>
    <article class="category" :style="{ backgroundImage: 'url(' + categoryData.image + ')' }">
    <router-link class="category__link" to="/">
        <p class="category__name">{{categoryData.name}}</p>
    </router-link>
    </article>
</template>

<script>
export default {
    props:{
        categoryData:{
            type:Object
        }
    }
}
</script>