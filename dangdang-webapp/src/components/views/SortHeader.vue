<template>
    <div id="sortHeader">
        <a href="" v-for="(data,u) in header2" :key="u+'index'"><img :src="data.srl" alt=""></a>
        <input type="text" placeholder="搜索商品/种类/衣服" class="sort-input">
        <a href="" v-for="(date,u) in header1" :key="u"><img :src="date.srl" alt=""></a>
    </div>
</template>

<script>
    export default {
        name: "SortHeader",
      props:['header1','header2']
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
        background-color: rgb(242,242,242);
    }
</style>