<template>
    <div>
        <div id="search-input">
            <span @click="page">&lt;</span><span><input type="text" placeholder="半小时漫画唐诗"></span><span>搜索</span>
        </div>
        <p class="p">热门搜索</p>
        <div id="search">
            <span>社科五折</span> <span>飞利浦</span> <span>学生文具</span> <span>安奈儿童装</span> <span>经管五折</span> <span>秒杀9.9元抢</span>
            <span>53天天练二年级上</span> <span>教材帮高中</span> <span>典范英语7</span> <span>小鸡求好习惯</span> <span>搜神记</span> <span>科学家故事100个</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "search",
        methods:{
            page(){
                this.$router.push({path:'/page'})
            }
        }
    }
</script>

<style scoped>
#search-input{
    width: 3.75rem;
    height: 0.5rem;
    background-color: white;
    line-height: 0.5rem;
    display: flex;
    justify-content: space-around;
    border-bottom: 0.01rem solid rgb(242,242,242);
}
#search-input input{
    width: 2rem;
    height: 0.3rem;
    margin-top: 0.1rem;
    outline: none;
    border-radius: 0.3rem;
    border: 0.01rem solid rgb(242,242,242);
}
    #search{
        width: 3.75rem;
        height: 5.75rem;
        background-color: rgb(242,242,242);
    }
#search span{
    display: inline-block;
    background-color: white;
    width: 1rem;
    height: 0.3rem;
    line-height: 0.3rem;
    border-radius: 0.1rem;
    margin-top: 0.1rem;
}
    .p{
        text-align: left;
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0.14rem;
        background-color: rgb(242,242,242);
        padding-left: 0.3rem;
    }
</style>