<template>
<div>
    <div id="page-header">
        <a href=""><img src="../assets/img/pageNav.png" alt="" class="pageImg"></a>
        <div id="page-headera"><Page-header></Page-header></div>
        <a href=""><img src="../assets/img/pageNav1.png" alt="" class="pageImg"></a>
    </div>
    <div>
        <banner></banner>
    </div>
    <div>
        <img src="../assets/img/86030062844430_y.jpg" alt="" class="pageImgcon">
    </div>
    <div>
        <page-sort></page-sort>
    </div>
    <div>
        <Page-content></Page-content>
    </div>
</div>
</template>

<script>
    import banner from "./views/banner";
    import PageHeader from "./views/PageHeader";
    import pageSort from "./views/pageSort";
    import PageContent from "./views/PageContent";
    export default {
        name: "page",
        components:{
            PageHeader,
            banner,
            pageSort,
            PageContent
        }
    }
</script>

<style scoped>
#page-header{
    width: 3.5rem;
    height: 0.6rem;
    margin: 0rem auto;
    box-sizing: border-box;
    line-height: 0.6rem;
    display: flex;
}
#page-headera{

}
    .pageImg{
        padding-top: 0.05rem;
        width: 0.6rem;
        height: 0.5rem;
    }
    .pageImgcon{
        width: 3.75rem;
        height: 1.5rem;
    }
</style>