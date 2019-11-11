<template>
    <div>
        <div id="land-footer">
            <p class="p"><a href="">忘记密码？</a><a href="">立即注册  </a></p>
            <div><a href=""></a><a href=""></a><a href=""></a></div>
            <p class="p2">安全问题 <span>| 登录代表您已同意</span> 《当当隐私政策》</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "landFooter"
    }
</script>

<style scoped>
#land-footer{
    width: 3rem;
    margin: 0rem auto;
}
.p{
    height: 0.3rem;
    line-height: 0.3rem;
    display: flex;
    justify-content: space-between;
    margin-top: 0.3rem;
}
    .p2{
        text-align: left;
        color: gainsboro;
        font-size: 0.14rem;
    }
.p2 span{
    color: black;
}
</style>