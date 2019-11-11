<template>
 <div id="cart">
     <buy-header :buy-header4="cartHeader4" :buy-header1="cartHeader1" :buy-header2="cartHeader2"></buy-header>
     <Cart-content></Cart-content>
 </div>
</template>

<script>
    import BuyHeader from "./views/BuyHeader";
    import CartContent from "./views/CartContent";
    export default {
        name: "cart",
        components:{
            BuyHeader,
            CartContent
        },
        data(){
           return{
               cartHeader4:[
                   {content:'购物车'}
               ],
               cartHeader1:[
                   {srl:'./img/1.png'}
               ],
               cartHeader2:[
                   {srl:'./img/2.png'}
               ],
           }
        }
    }
</script>

<style scoped>
#cart{
    height: 6rem;
    background-color: rgb(242,242,242);
}
</style>