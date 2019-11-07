<template>
<div>
    <sort-header :srl1="srl1" :srl2="srl2"></sort-header>
    <sort-content :book="total" :srle="totals"></sort-content>
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
                totals:[
                    {srl:'./img/new-1572429557.png',
                        name:'总榜'},
                    {srl:'./img/tu-1568871813.png',
                        name:'新书榜'},
                    {srl:'./img/kid-1565680692.png',
                        name:'童书榜'}
                ],
                srl1:[
                    {srl:'./img/1.png'}
                ],
                srl2:[
                    {srl:'./img/2.png'}
                ]
            }
        }
    }
</script>

<style scoped>

</style>