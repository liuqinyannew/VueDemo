<template>
<div>
    <div id="page-header">
        <a href=""><img src="../../public/img/pageNav.png" alt="" class="pageImg"></a>
        <div id="page-headera" @click="search">
            <Page-header></Page-header>
        </div>
        <a href=""><img src="../../public/img/pageNav1.png" alt="" class="pageImg"></a>
    </div>
    <div>
        <banner></banner>
    </div>
    <div>
        <img src="../../public/img/86030062844430_y.jpg" alt="" class="pageImgcon">
    </div>
    <div>
        <page-sort :img3="total"></page-sort>
    </div>
    <div class="page-cont">
        <Page-content :img1="totals" :img2="product"></Page-content>
        <buy-swip :img2="product"></buy-swip>
    </div>

</div>
</template>

<script>
    import banner from "./views/banner";
    import PageHeader from "./views/PageHeader";
    import pageSort from "./views/pageSort";
    import PageContent from "./views/PageContent";
    import BuySwip from "./views/BuySwip";
    export default {
        name: "page",
        components:{
            PageHeader,
            banner,
            pageSort,
            PageContent,
            BuySwip
        },
   data(){
            return{
                totals:[
                    {src1:'./img/mao_title.jpg'}
                ],
                product:[
                    {
                        src1:'./img/1128804227-1_h_166.jpg',
                        title:'店内更多低价书籍进店选购！格林...',
                        price1:'￥0.1',
                        price2:'￥9.80'
                    },
                    {
                        src1:'./img/26439655-1_h_9.jpg',
                        title:'店内更多低价书籍进店选购！格林...',
                        price1:'￥23.8',
                        price2:'￥120.00'
                    },
                    {
                        src1:'./img/1545156224-1_h_1.jpg',
                        title:'店内更多低价书籍进店选购！格林...',
                        price1:'￥9.9',
                        price2:'￥18.00'
                    },
                    {
                        src1:'./img/23408306-1_h_13.jpg',
                        title:'店内更多低价书籍进店选购！格林...',
                        price1:'￥49.9',
                        price2:'￥699.00'
                    },
                    {
                        src1:'./img/1338237909-1_h_2.jpg',
                        title:'店内更多低价书籍进店选购！格林...',
                        price1:'￥9.9',
                        price2:'￥599.00'
                    },
                    {
                        src1:'./img/1548863343-1_h_1.jpg',
                        title:'店内更多低价书籍进店选购！格林...',
                        price1:'￥25.8',
                        price2:'￥127.00'
                    },
                    {
                        src1:'./img/1551909362-1_h_1.jpg',
                        title:'店内更多低价书籍进店选购！格林...',
                        price1:'￥19.9',
                        price2:'￥179.00'
                    }
                ],
                total:[
                    {
                        src1:'./img/chagnxiao-1562827477.png'
                    },
                    {
                        src1:'./img/xinshu-1563173497.png'
                    },
                    {
                        src1:'./img/SY-iCON-3-5.10-1557488951.png'
                    },
                    {
                        src1:'./img/icon-cx-1559818801.png'
                    },
                    {
                        src1:'./img/chagnxiao-1562827477.png'
                    },
                    {
                        src1:'./img/116550067538580_y.jpg'
                    },
                    {
                        src1:'./img/7chaoshi-1545121233.png'
                    },
                    {
                        src1:'./img/00000-1564393723.png'
                    },
                    {
                        src1:'./img/9zhongxin-1545121233.png'
                    },
                    {
                        src1:'./img/12311-1556245256.jpg'
                    }
                ]
            }
        },
        methods:{
            search(){
                this.$router.push({path:'/search'})
            }
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
.page-cont{
    height: 3rem;
}
</style>