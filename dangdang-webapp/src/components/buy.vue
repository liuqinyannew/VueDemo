<template>
    <div>
        <Buy-header></Buy-header>
        <buy-content></buy-content>
        <Buy-content-two></Buy-content-two>
    </div>
</template>

<script>
    import BuyHeader from "./views/BuyHeader";
    import BuyContent from "./views/BuyContent";
    import BuyContentTwo from "./views/BuyContentTwo";
    export default {
        name: "buy",
        components:{
            BuyHeader,
            BuyContent,
            BuyContentTwo
        }
        // data(){
        //     return{
        //         total:[
        //             {
        //                 name1:'教辅',
        //                 name2:'每满79减30',
        //                 srl:'./img/25257593-1_b_8.jpg'
        //             },
        //             {
        //                 name1:'教辅',
        //                 name2:'每满100减50',
        //                 srl:'./img/25257593-1_b_8.jpg'
        //             },
        //             {
        //                 name1:'教辅',
        //                 name2:'每满30减15',
        //                 srl:'./img/1901134143-1_b_1.jpg'
        //             }
        //         ],
        //         totals:[
        //             {
        //                 name2:'11月49元5件',
        //                 srl:'./img/25536856-1_b_3.jpg'
        //             },
        //             {
        //                 name2:'美斯特邦威联合超品',
        //                 srl:'./img/1174645489-1_b_1.jpg'
        //             },
        //             {
        //                 name2:'一件4.5折',
        //                 srl:'./img/1508151414-1_b_1.jpg'
        //             }
        //         ]
        //     }
        // }
    }
</script>

<style scoped>

</style>