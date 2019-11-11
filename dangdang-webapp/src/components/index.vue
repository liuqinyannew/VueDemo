<template>
 <div>
     <router-view></router-view>
     <div id="footer">
         <a :href="date.img2" v-for="(date,u) in totals" :key="u"><img :src="date.img1" alt="" class="footer"></a>
     </div>
 </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                totals:[
                    {
                        img1:'./img/icon_03_in-1536891748.png',
                        img2:'#/'
                    },
                    {
                        img1:'./img/feilei-8-2.png',
                        img2:'#/page/sort'
                    },
                    {
                        img1:'./img/ic_buy_normal2-1536892644.png',
                        img2:'#/page/buy'
                    },
                    {
                        img1:'./img/guowuche-8-2.png',
                        img2:'#/page/cart'
                    },
                    {
                        img1:'./img/wodedangdang---4.png',
                        img2:'#/page/main'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
#footer{
    width: 3.75rem;
    height: 0.6rem;
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0rem;
    border-top: 0.01rem solid gainsboro;
    padding-top: 0.1rem;
    background-color: white;
    z-index: 9;
}
.footer{
    width: 0.4rem;
    height: 0.4rem;
}
</style>