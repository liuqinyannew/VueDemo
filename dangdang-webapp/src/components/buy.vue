<template>
    <div>
        <Buy-header :buyHeader1="buyHeader1" :buyHeader2="buyHeader2" :buyHeader3="buyHeader3" :buy-header4="buyHeader4"></Buy-header>
        <buy-content :book1="total" :book2="totals"></buy-content>
        <Buy-content-two :still="still"></Buy-content-two>
        <div id="buySwipe">
            <buy-swip :img2="swiper1" class="buySwipe"></buy-swip>
        </div>
    </div>
</template>

<script>
    import BuyHeader from "./views/BuyHeader";
    import BuyContent from "./views/BuyContent";
    import BuyContentTwo from "./views/BuyContentTwo";
    import BuySwip from "./views/BuySwip";
    export default {
        name: "buy",
        components:{
            BuyHeader,
            BuyContent,
            BuyContentTwo,
            BuySwip
        },
        data(){
            return{
                total:[
                    {
                        name1:'教辅',
                        name2:'每满79减30',
                        srl:'./img/25257593-1_b_8.jpg'
                    },
                    {
                        name1:'教辅',
                        name2:'每满100减50',
                        srl:'./img/25257593-1_b_8.jpg'
                    },
                    {
                        name1:'教辅',
                        name2:'每满30减15',
                        srl:'./img/1901134143-1_b_1.jpg'
                    }
                ],
                totals:[
                    {
                        name2:'11月49元5件',
                        srl:'./img/25536856-1_b_3.jpg'
                    },
                    {
                        name2:'美斯特邦威联合超品',
                        srl:'./img/1174645489-1_b_1.jpg'
                    },
                    {
                        name2:'一件4.5折',
                        srl:'./img/1508151414-1_b_1.jpg'
                    }
                ],
                still:[
                    {srl:'./img/seckill-title.925eac7.png'}
                ],
                buyHeader1:[
                    {srl:'./img/1.png'}
                ],
                buyHeader2:[
                    {srl:'./img/2.png'}
                ],
                buyHeader3:[
                    {srl:'./img/20180825153505715.png'},
                    {srl:'./img/2018082515383576435.png'},
                    {srl:'./img/2018082515395286917.png'},
                    {srl:'./img/2018083116044590576.png'},
                    {srl:'./img/ddpp-1537350824.png'},
                    {srl:'./img/2018083116363087335.png'},
                    {srl:'./img/2018083116355544875.png'},
                    {srl:'./img/2018083116365438226.png'},
                    {srl:'./img/2018083116373380162.png'},
                    {srl:'./img/coupon-1537505152.png'}
                ],
                buyHeader4:[
                    {content:'值得买'}
                ],
                swiper1:[
                    {
                        src1:'./img/1542777579-1_h.jpg',
                        title:'潮百搭单肩...',
                        price1:'￥1.00',
                        price2:'￥159.00'
                    },
                    {
                        src1: './img/27863877-1_h.jpg',
                        title:'当当独家订...',
                        price1:'￥25.80',
                        price2:'￥68.40'
                    },
                    {
                        src1: './img/1547471984-1_h.jpg',
                        title:'店内更多低价书籍进店选购！格林...',
                        price1:'￥65.00',
                        price2:'￥198.00'
                    },
                    {
                        src1: './img/1067815704-1_h.jpg',
                        title:'店内更多低价书籍进店选购！格林...',
                        price1:'￥28.90',
                        price2:'￥69999.00'
                    },
                    {
                        src1: './img/1067816004-1_h.jpg',
                        title:'店内更多低价书籍进店选购！格林...',
                        price1:'￥0.1',
                        price2:'￥9.80'
                    },
                    {
                        src1: './img/1067816204-1_h.jpg',
                        title:'店内更多低价书籍进店选购！格林...',
                        price1:'￥0.1',
                        price2:'￥9.80'
                    },
                    {
                        src1: './img/1067816504-1_h.jpg',
                        title:'店内更多低价书籍进店选购！格林...',
                        price1:'￥0.1',
                        price2:'￥9.80'
                    },
                    {
                        src1: './img/1067816704-1_h.jpg',
                        title:'店内更多低价书籍进店选购！格林...',
                        price1:'￥0.1',
                        price2:'￥9.80'
                    },
                    {
                        src1: './img/1067815204-1_h.jpg',
                        title:'店内更多低价书籍进店选购！格林...',
                        price1:'￥0.1',
                        price2:'￥9.80'
                    },
                    {
                        src1: './img/1213991967-1_h.jpg',
                        title:'店内更多低价书籍进店选购！格林...',
                        price1:'￥0.1',
                        price2:'￥9.80'
                    }

                ]
            }
        }
    }
</script>

<style scoped>
    #buySwipe{
        position: relative;
    }
.buySwipe{
    position: absolute;
    top: -1.6rem;
}
</style>