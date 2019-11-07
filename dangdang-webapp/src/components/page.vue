<template>
<div>
    <div id="page-header">
        <a href=""><img src="../../public/img/pageNav.png" alt="" class="pageImg"></a>
        <div id="page-headera"><Page-header></Page-header></div>
        <a href=""><img src="../../public/img/pageNav1.png" alt="" class="pageImg"></a>
    </div>
    <div>
        <banner></banner>
    </div>
    <div>
        <img src="../../public/img/86030062844430_y.jpg" alt="" class="pageImgcon">
    </div>
    <div>
        <page-sort></page-sort>
    </div>
    <div>
        <Page-content :pageimg1="totals" :pageimg2="product" :pageimg3="totalSort"></Page-content>
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
        },
        data(){
            return{
                totals:[
                    {src1:'./img/mao_title.jpg'}
                ],
                product:[
                    {src1:'./img/1128804227-1_h_166.jpg'},
                    {src1:'./img/26439655-1_h_9.jpg'},
                    {src1:'./img/1545156224-1_h_1.jpg'},
                    {src1:'./img/23408306-1_h_13.jpg'},
                    {src1:'./img/1338237909-1_h_2.jpg'},
                    {src1:'./img/1548863343-1_h_1.jpg'},
                    {src1:'./img/1551909362-1_h_1.jpg'}
                ],
                totalSort:[
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