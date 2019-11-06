<template>
    <div id="SortRead-content">
        <div id="SortRead-content-h1"><span>文学></span><span>畅销榜></span></div>
        <div id="SortRead-content-h2"><span>中国现当代随笔</span>|<span>名家作品</span>|<span>文集</span></div>
        <div id="SortRead-content-h3"><span>纪实文学</span>|<span>中国古诗词</span>|<span>展开</span></div>
    </div>
</template>

<script>
    export default {
        name: "SortReades"
    }
</script>

<style scoped>
    #SortRead-content{
        width: 2.9rem;
        height: 1.5rem;
        background-color: white;
    }
    #SortRead-content-h1{
        width: 2.5rem;
        display: flex;
        justify-content: space-between;
        margin: 0rem auto;
        padding-top: 0.1rem;

    }
    #SortRead-content-h1 span:nth-child(1){
        color: black;
        font-weight: 900;
    }
    #SortRead-content-h1 span:nth-child(2){
        color: gainsboro;
    }
    #SortRead-content-h2{
        width: 2.5rem;
        height: 0.7rem;
        display: flex;
        justify-content: space-between;
        margin: 0rem auto;
        padding-top: 0.2rem;
        border-bottom: 0.01rem solid gainsboro;
    }
    #SortRead-content-h2 span{
        display: inline-block;
        width: 0.75rem;
    }
    #SortRead-content-h3{
        width: 2.5rem;
        height: 0.7rem;
        display: flex;
        justify-content: space-between;
        margin: 0rem auto;
        padding-top: 0.2rem;
        border-bottom: 0.01rem solid gainsboro;
    }
    #SortRead-content-h3 span{
        display: inline-block;
        width: 0.75rem;
    }
</style>