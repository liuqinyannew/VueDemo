<template>
    <div id="banner">
        <banner-sort :img="img"></banner-sort>
        <Sort-contents class="con-cen"></Sort-contents>
        <Sort-content-all class="con-cen" :books="books"></Sort-content-all>
        <Sort-read class="con-cen"></Sort-read>
        <Sort-reades class="con-cen"></Sort-reades>
    </div>
</template>

<script>
    import bannerSort from './banner-sort';
    import SortContents from './Sort-contents';
    import SortContentAll from './SortContent-all';
    import SortRead from "./SortRead";
    import SortReades from "./SortReades";
    export default {
        name: "sortRight",
        components:{
            bannerSort,
            SortContents,
            SortContentAll,
            SortRead,
            SortReades
        },
        props:['books','img']
    }
</script>

<style scoped>
    #banner{
        margin-left: 0.1rem;
    }
    .con-cen{
        margin-top: 0.1rem;
    }
</style>