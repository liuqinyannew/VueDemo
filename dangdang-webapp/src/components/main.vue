<template>
    <div class="main">
        <buy-header :buy-header1="buyHeader1" :buy-header2="buyHeader2" :buy-header4="buyHeader4"></buy-header>
        <main-content-nav></main-content-nav>
        <main-collect :num="num"></main-collect>
        <main-news :img="img1"></main-news>
        <main-con></main-con>
        <main-news :img="img2" class="main-img"></main-news>
        <main-news :img="img3"  class="main-img"></main-news>
        <main-news :img="img4"></main-news>
        <main-news :img="img5"></main-news>
        <main-news :img="img6"></main-news>
        <main-news :img="img7"></main-news>

    </div>
</template>

<script>
    import BuyHeader from "./views/BuyHeader";
    import mainContentNav from "./views/mainContentNav";
    import mainCollect from "./views/mainCollect";
    import mainNews from "./views/mainNews";
    import mainCon from "./views/mainCon";
    export default {
        name: "main",
        components:{
            BuyHeader,
            mainContentNav,
            mainCollect,
            mainNews,
            mainCon
        },
        data(){
            return{
                buyHeader1:[
                    {srl:'./img/1.png'}
                ],
                buyHeader2:[
                    {srl:'./img/2.png'}
                ],
                buyHeader4:[
                    {content:'我的当当'}
                ],
                img1:{
                    srl:'./img/wd-012-1.png',
                    name1:'我的订单',
                    name2:'查看全部购买商品'
                    },
                img2:{
                    srl:'./img/wd-012-02.png',
                   name1:'会员中心'
                    },
                img3:{
                    srl:'./img/wd-012-03.png',
                    name1:'我的礼券'
                },
                img4:{
                    srl:'./img/wd-012-04.png',
                    name1:'积分抵现'
                },
                img5:{
                    srl:'./img/wd-012-05.png',
                    name1:'我的礼品卡'
                },
                img6:{
                    srl:'./img/wd-012-07.png',
                    name1:'收获地址'
                },
                img7:{
                    srl:'./img/111.png',
                    name1:'我的电子书'
                },
                num:{
                    num1:'0',
                    num2:'0',
                    num3:'3'
                }
            }
        }
    }
</script>

<style scoped>
.main{
    background-color: rgb(242,242,242);
}
    .main-img{
        margin-top: 0.15rem;
    }
</style>