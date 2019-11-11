<template>
<div>
    <sort-header :header1="total" :header2="totals"></sort-header>
    <sort-content :book="book" :books="books" :img="img"></sort-content>
</div>

</template>
<script>
    import SortHeader from "./views/SortHeader";
    import SortContent from "./views/SortContent";
    export default {
        name: "sort",
        components:{
            SortHeader,
            SortContent
        },
        data(){
            return{
                total:[
                    {srl:'./img/1.png'}
                ],
                totals:[
                    {srl:'./img/2.png'}
                ],
                book:[
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
                ],
               books:{
                   books1:[
                       {srl:'./img/new-1572429557.png',
                           name:'总榜'},
                       {srl:'./img/tu-1568871813.png',
                           name:'新书榜'},
                       {srl:'./img/kid-1565680692.png',
                           name:'童书榜'}
                   ],
                   books2:[
                       {srl:'./img/new-1572429557.png',
                           name:'总榜'},
                       {srl:'./img/tu-1568871813.png',
                           name:'网络文学'},
                       {srl:'./img/kid-1565680692.png',
                           name:'创意工具'}
                   ],
                   books3:[
                       {srl:'./img/new-1572429557.png',
                           name:'总榜'},
                       {srl:'./img/tu-1568871813.png',
                           name:'电子书'},
                       {srl:'./img/kid-1565680692.png',
                           name:'听书'}
                   ],
                   books4:[
                       {srl:'./img/new-1572429557.png',
                           name:'总榜'},
                       {srl:'./img/tu-1568871813.png',
                           name:'新书榜'},
                       {srl:'./img/kid-1565680692.png',
                           name:'童书榜'}
                   ],
                   books5:[
                       {srl:'./img/new-1572429557.png',
                           name:'总榜'},
                       {srl:'./img/tu-1568871813.png',
                           name:'新书榜'},
                       {srl:'./img/kid-1565680692.png',
                           name:'童书榜'}
                   ],
                   books6:[
                       {srl:'./img/new-1572429557.png',
                           name:'总榜'},
                       {srl:'./img/tu-1568871813.png',
                           name:'新书榜'},
                       {srl:'./img/kid-1565680692.png',
                           name:'童书榜'}
                   ]
               },
                img:{
                    src:'./img/1242-366-1572604899.jpg',
                    src1:'./img/1242x366-1572504325.jpg',
                    src2:'./img/1900---560-1572577758.jpg'
                }
            }
        }
    }
</script>

<style scoped>

</style>