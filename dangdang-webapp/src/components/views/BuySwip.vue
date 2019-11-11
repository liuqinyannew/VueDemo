<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(data,u) in img2" :key="u"><img :src="data.src1" alt=""><br>{{data.title}}<br><span>{{data.price1}}</span><br><del>{{data.price2}}</del></div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        name: "BuySwip",
        mounted() {
            new Swiper('.swiper-container', {
                slidesPerView: 3.4,
                spaceBetween: 6,
            })
        },
        props:['img2']
    }
</script>

<style scoped>
    .swiper-container {
        width: 3.75rem;
        margin: 0.05rem auto;

    }
   .swiper-slide{
       width: 0.5rem;
       height: 1.6rem;
       text-align: left;
       background-color: white;
   }
    .swiper-slide img{
        width: 1rem;
        height: 0.8rem
    }
    :root {
        --swiper-theme-color: red;
    }
</style>