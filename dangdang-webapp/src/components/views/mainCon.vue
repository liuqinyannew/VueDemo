<template>
    <div id="mainCon">
        <span class="mainCon-span"><img src="http://img60.ddimg.cn/upload_img/00487/11111/fukuan-07.png" alt="">待付款</span>
        <span class="mainCon-span"><img src="http://img63.ddimg.cn/upload_img/00487/11111/shouhuo-07.png" alt="">待收货</span>
       <span class="mainCon-span"> <img src="http://img61.ddimg.cn/upload_img/00555/touch/pd-return.png" alt="">退换货</span>
    </div>
</template>

<script>
    export default {
        name: "mainCon"
    }
</script>

<style scoped>
#mainCon{
    width: 3.75rem;
    height: 0.5rem;
    background-color: white;
    display: flex;
    justify-content: space-around;
}
.mainCon-span{
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
}
.mainCon-span img{
    width: 0.25rem;
    height: 0.25rem;
    margin-left: 0.1rem;
}
</style>