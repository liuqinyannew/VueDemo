<template>
    <div id="main-nav">
        <span @click="land">登陆/注册</span>
    </div>
</template>

<script>
    export default {
        name: "mainContentNav",
        methods:{
            land(){
                this.$router.push({path:'/land'})
            }
        }
    }
</script>

<style scoped>
#main-nav{
    width: 3.75rem;
    height: 1.2rem;
    background-image: url("http://img61.ddimg.cn/upload_img/00610/home/user-bg.jpg");
    background-size: 100% 100%;
    color: white;
    font-size: 0.16rem;
    box-sizing: border-box;
}
#main-nav span{
    display: inline-block;
    width: 1.2rem;
    height: 0.4rem;
    line-height: 0.4rem;
    border: 0.01rem solid white;
    border-radius: 0.5rem;
    margin-top: 0.25rem;
}
</style>