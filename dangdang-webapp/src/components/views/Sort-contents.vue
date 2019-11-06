<template>
<div id="content">
    <div class="content-left">
        <div>进入当当商城 <br><span class="span">特价低至1.9折</span></div>
        <div class="a">></div>
    </div>
    <div class="content-left">
        <div>进入图书馆 <br><span class="span">精选少儿读物</span></div>
        <div class="a">></div>
    </div>
</div>
</template>

<script>
    export default {
        name: "Sort-contents"
    }
</script>

<style scoped>
#content{
    width: 2.9rem;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
}
    .content-left{
        width: 1.4rem;
        height: 0.6rem;
        display: flex;
        justify-content: space-around;
        background-color: white;
        line-height: 0.2rem;
    }
    .span{
        color: gainsboro;
    }
    .a{
        margin-top: 0.1rem;
        color: gainsboro;
    }
</style>