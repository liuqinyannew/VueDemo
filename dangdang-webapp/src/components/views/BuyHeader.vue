<template>
  <div>
      <div id="buyHeader">
          <a href="" v-for="(data,u) in totals" :key="u"><img :src="data.srl" alt=""></a>
          <span>值得买</span>
          <a href="" v-for="(date,u) in total" :key="u"><img :src="date.srl" alt=""></a>
      </div>
      <div id="buy-content">
          <a href="" v-for="(data,u) in totales" :key="u" class="buy-content-a"><img :src="data.srl" alt="" ></a>
      </div>
  </div>
</template>

<script>
    export default {
        name: "BuyHeader",
        data(){
            return {
                total:[
                    {srl:'./img/1.png'}
                ],
                totals:[
                    {srl:'./img/2.png'}
                ],
                totales:[
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
                ]
            }

        }
    }
</script>

<style scoped>
    #buyHeader{
        width: 3.75rem;
        height: 0.4rem;
        display: flex;
        justify-content: space-around;
        box-sizing: border-box;
        margin-top: 0.05rem;
        background-color: white;
        border-bottom: 0.01rem solid gainsboro;
        line-height: 0.4rem;
        font-size: 0.18rem;
    }
    #buy-content{
        width: 3.75rem;
        display: flex;
        flex-wrap: wrap;
    }
   .buy-content-a{
       display: inline-block;
       width: 0.74rem;
       line-height: 0.5rem;
       border: 0.005rem solid gainsboro;
   }
    .buy-content-a img{
        width: 100%;
        height: 100%;
    }
</style>