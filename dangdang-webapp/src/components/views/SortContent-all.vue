<template>
    <div id="SortContent-all">
    <h3 class="SortContent-all-h1">榜单</h3>
        <div class="SortContent-all-div">
            <a href="" v-for="(data,u) in srle" :key="u" class="SortContent-all-a"><img :src="data.srl" alt=""><br><span>{{data.name}}</span></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SortContent-all",
       props:['srle']
    }
</script>

<style scoped>
#SortContent-all{
    width: 2.9rem;
    height: 1.5rem;
    background-color: white;
}
    .SortContent-all-h1{
        text-align: left;
        padding-top: 0.1rem;
        padding-left: 0.1rem;

    }
    .SortContent-all-a{
        display: inline-block;
        width: 0.6rem;
        height: 0.6rem;
    }
.SortContent-all-a img{
    width: 100%;
   height: 100%;
}
    .SortContent-all-div{
        margin-top: 0.1rem;
        display: flex;
        justify-content: space-around;
    }
</style>