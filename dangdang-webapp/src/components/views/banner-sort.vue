<template>
    <div>
        <swipe class="my-swipe">
            <swipe-item class="slide1"><img :src="img.src" alt=""></swipe-item>
            <swipe-item class="slide2"><img :src="img.src1" alt=""></swipe-item>
            <swipe-item class="slide3"><img :src="img.src2" alt=""></swipe-item>
        </swipe>
    </div>
</template>

<script>
    export default {
        name: "banner",
       props:['img']
    }
</script>

<style scoped>
    .my-swipe {
        width: 2.9rem;
        height:1rem;
        color: #fff;
        text-align: center;
    }
    .my-swipe img{
        width: 100%;
        height: 100%;
    }
    .slide1 {
        color: #fff;
        background-size: 100% 100%;
    }
    .slide2 {
        color: #000;
        background-size: 100% 100%;
    }
    .slide3 {
        color: #000;
        background-size: 100% 100%;
    }
</style>