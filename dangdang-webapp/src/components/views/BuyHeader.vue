<template>
  <div>
      <div id="buyHeader">
          <a href="" v-for="(data,u) in buyHeader2" :key="u+'indexa'"><img :src="data.srl" alt=""></a>
          <span v-for="(data,u) in buyHeader4" :key="u+'indexb'">{{data.content}}</span>
          <a href="" v-for="(date,u) in buyHeader1" :key="u+'index'"><img :src="date.srl" alt=""></a>
      </div>
      <div id="buy-content">
          <a href="" v-for="(data,u) in buyHeader3" :key="u" class="buy-content-a"><img :src="data.srl" alt="" ></a>
      </div>
  </div>
</template>

<script>
    export default {
        name: "BuyHeader",
       props:['buyHeader1','buyHeader2','buyHeader3','buyHeader4']
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