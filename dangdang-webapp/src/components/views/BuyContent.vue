<template>
    <div id="BuyContent">
        <div id="BuyContent-header">
            <span></span><span>促销专场</span><span>更多 &gt;</span>
        </div>
        <div class="BuyContent-content">
            <a href="" v-for="(data,u) in total" :key="u"><span>{{data.name1}}</span><br><span>{{data.name2}}</span><br><img :src="data.srl" alt=""></a>
        </div>
        <div class="BuyContent-content Buy-a">
            <a href="" v-for="(data,u) in totals" :key="u"><span></span><span>{{data.name2}}</span><br><span></span><img :src="data.srl" alt=""></a>
        </div>

    </div>
</template>

<script>
    export default {
        name: "BuyContent",
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
                ]
            }
        }
    }
</script>

<style scoped>
    #BuyContent{
        width: 3.75rem;
        height: 3.3rem;
        background-color: gainsboro;
    }
    #BuyContent-header{
        width: 3.5rem;
        height: 0.5rem;
        display: flex;
        justify-content: space-between;
        line-height: 0.5rem;
    }
    #BuyContent-header span:nth-child(1){
        display: inline-block;
        width: 0.6rem;
    }
    #BuyContent-header span:nth-child(2){
        font-size: 0.18rem;
        color: white;
        font-weight: 900;
    }
    #BuyContent-header span:nth-child(3){
        font-size: 0.14rem;
        color: white;
    }
    .BuyContent-content{
        width: 3.5rem;
        height: 1.4rem;
        margin: 0rem auto;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .BuyContent-content a{
        display: inline-block;
        width: 1rem;
        height: 1.2rem;
        background-color: white;
        border-radius: 0.1rem;
        font-size: 0.14rem;
    }
    .BuyContent-content img{
        width: 0.8rem;
        height: 0.75rem;
        margin-left: 0.1rem;
    }
    .BuyContent-content span:nth-of-type(2){
        color: blue;
    }
  .Buy-a a:nth-of-type(1) span:nth-of-type(3){
      display: inline-block;
      height: 0.2rem;
  }
    .Buy-a a:nth-of-type(3) span:nth-of-type(3){
        display: inline-block;
        height: 0.2rem;
    }
</style>