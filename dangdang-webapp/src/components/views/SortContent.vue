<template>
   <div id="sort-content-right">
       <div id="sort-content">
           <ul>
               <li v-for="(data,u) in book" :key="u" class="sort-content-li">{{data.content}}</li>
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
        components:{
            bannerSort,
            SortContents,
            SortContentAll,
            SortRead,
            SortReades
        },
        props:['book']
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