<template>
    <div id="cartContent">
        <p>您还没有购买任何商品</p>
        <input type="button" value="逛一逛" class="cartButton"> <input type="button" value="我的收藏"  class="cartButton">
    </div>
</template>

<script>
    export default {
        name: "CartContent"
    }
</script>

<style scoped>
    #cartContent{
        height: 2.3rem;
        background-color: rgb(242,242,242);
        border-bottom: 0.01rem solid rgb(242,242,242);
        padding-top: 1.2rem;
    }
    #cartContent p{
        height: 0.4rem;
        line-height: 0.4rem;
    }
.cartButton{
    width: 1.2rem;
    height: 0.4rem;
    border: 0.01rem solid black;
    border-radius: 0.1rem;
    background-color: rgb(242,242,242);
}
</style>