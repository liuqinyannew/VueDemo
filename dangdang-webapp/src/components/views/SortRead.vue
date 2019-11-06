<template>
    <div id="SortRead-content">
        <div id="SortRead-content-h1"><span>小说></span><span>畅销榜></span></div>
        <div id="SortRead-content-h2"><span>社会</span>|<span>侦探/悬疑/推理</span>|<span>情感</span></div>
        <div id="SortRead-content-h3"><span>世界名著</span>|<span>历史</span>|<span>展开</span></div>
    </div>
</template>

<script>
    export default {
        name: "SortRead"
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