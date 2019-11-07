<template>
    <div id="sortHeader">
        <a href="" v-for="(data,u) in srl2" :key="u"><img :src="data.srl" alt=""></a>
        <input type="text" placeholder="搜索商品/种类/衣服" class="sort-input">
        <a href="" v-for="(date,u) in srl1" :key="u"><img :src="date.srl" alt=""></a>
    </div>
</template>

<script>
    export default {
        name: "SortHeader",
        props:['srl1','srl2']
    }
</script>

<style scoped>
    #sortHeader{
        width: 3.75rem;
        height: 0.4rem;
        display: flex;
        justify-content: space-around;
       box-sizing: border-box;
        margin-top: 0.05rem;
        background-color: white;
        border-bottom: 0.01rem solid gainsboro;
    }
    .sort-input{
        width: 2.5rem;
        height: 0.3rem;
        outline:none;
        border: 0.01rem solid gainsboro;
        border-radius: 0.5rem;
        text-align: center;
        background-color: gainsboro;
    }
</style>