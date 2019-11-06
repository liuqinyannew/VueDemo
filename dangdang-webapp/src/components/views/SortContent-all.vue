<template>
    <div id="SortContent-all">
    <h3 class="SortContent-all-h1">榜单</h3>
        <div class="SortContent-all-div">
            <a href="" v-for="(data,u) in total" :key="u" class="SortContent-all-a"><img :src="data.srl" alt=""><br><span>{{data.name}}</span></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SortContent-all",
        data(){
            return{
                total:[
                    {srl:require('../../assets/img/new-1572429557.png'),
                    name:'总榜'},
                    {srl:require('../../assets/img/tu-1568871813.png'),
                        name:'新书榜'},
                    {srl:require('../../assets/img/kid-1565680692.png'),
                        name:'童书榜'}
                ]
            }
        }
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