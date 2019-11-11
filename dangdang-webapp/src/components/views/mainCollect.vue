<template>
    <div id="mainCollect">
        <span>{{num.num1}}<br>收藏的商品</span><span>{{num.num2}}<br>关注的店铺</span><span>{{num.num3}}<br>我的足迹</span>
    </div>
</template>

<script>
    export default {
        name: "mainCollect",
        props:['num']
    }
</script>

<style scoped>
#mainCollect{
    width: 3.75rem;
    height: 0.6rem;
    border-bottom: 0.01rem solid gainsboro;
    background-color: white;
}
#mainCollect span{
    display: inline-block;
    width: 1.2rem;
    height: 0.3rem;
    margin-top: 0.15rem;
}
#mainCollect span:nth-of-type(2){
    border-right: 0.01rem solid gainsboro;
    border-left: 0.01rem solid gainsboro;
}
</style>