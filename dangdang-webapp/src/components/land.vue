<template>
    <div>
        <buy-header :buy-header2="cartHeader2" :buy-header1="cartHeader1" :buy-header4="cartHeader4"></buy-header>
        <land-content :land="land" :src="src"></land-content>
    </div>
</template>

<script>
    import BuyHeader from "./views/BuyHeader";
    import landContent from "./views/landContent";
    export default {
        name: "land",
        components: {
            BuyHeader,
            landContent
        },
        data() {
            return {
                cartHeader4: [
                    {content: '当当登陆'}
                ],
                cartHeader1: [
                    {srl: './img/1.png'}
                ],
                cartHeader2: [
                    {srl: './img/2.png'}
                ],
            land:[
                {land:'账号密码登录'},
                {land:'短信快捷登录'}
            ],
                src:{
                    src1:'./img/land1.PNG',
                    src2:'./img/land2.PNG'
                }
            }
        }
    }
</script>

<style scoped>

</style>