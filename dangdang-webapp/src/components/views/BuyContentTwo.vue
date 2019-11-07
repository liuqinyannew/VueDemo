<template>
    <div id="BuyContentTwo">
       <div class="BuyContentTwo">
           <div id="BuyContentTwo-header">
               <span></span><span><img :src="data.srl" alt="" v-for="(data,u) in total" :key="u"></span><span>更多 &gt;</span>
           </div>
       </div>
    </div>
</template>

<script>
    export default {
        name: "BuyContentTwo",
        data(){
            return {
                total:[
                    {srl:'./img/seckill-title.925eac7.png'}
                ]
            }
        }
    }
</script>

<style scoped>
#BuyContentTwo{
    width: 3.75rem;
    height: 2rem;
    background-color: white;
}
    #BuyContentTwo-header{
        width: 3.5rem;
        height: 0.5rem;
        display: flex;
        justify-content: space-between;
        margin: 0rem auto;
        color: white;
        line-height: 0.5rem;
    }
#BuyContentTwo-header img{
    width: 2rem;
    height: 0.25rem;
}
    #BuyContentTwo-header span:nth-of-type(1){
        display: inline-block;
        width: 0.2rem;
    }
#BuyContentTwo-header span:nth-of-type(2){
    padding-top: 0.1rem;
}
    .BuyContentTwo{
        width: 3.75rem;
        height: 1.5rem;
        background-color: pink;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }
</style>