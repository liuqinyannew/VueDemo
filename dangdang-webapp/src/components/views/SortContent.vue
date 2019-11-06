<template>
   <div id="sort-content-right">
       <div id="sort-content">
           <ul>
               <li v-for="(data,u) in total" :key="u" class="sort-content-li">{{data.content}}</li>
           </ul>
       </div>
       <div id="banner">
           <banner-sort></banner-sort>
           <Sort-contents class="con-cen"></Sort-contents>
           <Sort-content-all class="con-cen"></Sort-content-all>
           <Sort-read class="con-cen"></Sort-read>
           <Sort-reades class="con-cen"></Sort-reades>
       </div>



   </div>
</template>

<script>
    import bannerSort from './banner-sort';
    import SortContents from './Sort-contents';
    import SortContentAll from './SortContent-all';
    import SortRead from "./SortRead";
    import SortReades from "./SortReades";
    export default {
        name: "SortContent",
        data(){
            return{
                total:[
                    {content:'图书'},
                    {content:'童书'},
                    {content:'电子书'},
                    {content:'听书'},
                    {content:'网络文学'},
                    {content:'创意工具'},
                    {content:'旧书/拍卖'},
                    {content:'女装'},
                    {content:'男装'},
                    {content:'男女鞋'},
                    {content:'童装童鞋'},
                    {content:'内衣配饰'},
                    {content:'母婴玩具'},
                    {content:'食品生鲜'},
                    {content:'美妆个护'}
                ]
            }
        },
        components:{
            bannerSort,
            SortContents,
            SortContentAll,
            SortRead,
            SortReades
        }
    }
</script>

<style scoped>
    #sort-content-right{
        width: 3.75rem;
        display: flex;
        background-color: gainsboro;
    }
#sort-content{
    width: 0.8rem;

}
    .sort-content-li{
        height: 0.45rem;
        line-height: 0.45rem;
        background-color: white;
    }
    #banner{
        margin-left: 0.1rem;
    }
    .con-cen{
        margin-top: 0.1rem;
    }
</style>