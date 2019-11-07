<template>
    <div>
        <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
            <swipe-item class="slide4"></swipe-item>
        </swipe>
    </div>
</template>

<script>
    export default {
        name: "banner"
    }
</script>

<style scoped>
    .my-swipe {
        width: 3.75rem;
        height:1rem;
        color: #fff;
        text-align: center;
    }
    .slide1 {
        color: #fff;
        background: url('../../../public/img/1242-366-1572604899.jpg');
        background-size: 100% 100%;
    }
    .slide2 {
        background: url('../../../public/img/1242x366-1572504325.jpg');
        color: #000;
        background-size: 100% 100%;
    }
    .slide3 {
        background: url('../../../public/img/1242x366_1029-1572580426.jpg');
        color: #000;
        background-size: 100% 100%;
    }
    .slide4 {
        background: url('../../../public/img/1900---560-1572577758.jpg');
        color: #000;
        background-size: 100% 100%;
    }
</style>