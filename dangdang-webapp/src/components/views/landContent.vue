<template>
    <div id="land">
        <div id="landContent">
            <span v-for="(data,u) in land" :key="u" :class="index==u?'black':'gray'" @click="click(u)">{{data.land}}</span>
        </div>
        <div class="landContent" v-if="flage==0">
           <span class="pho"><input type="text" placeholder="请输入手机号/邮箱/昵称"></span>
           <span class="pho"><input type="password" placeholder="请输入密码"></span>
            <button>登录</button>
            <land-footer></land-footer>
        </div>
        <div class="landContent" v-if="flage==1">
            <span class="pho"><input type="text" placeholder="请输入手机号"></span>
            <button>获取验证码</button>
            <land-footer></land-footer>
        </div>
    </div>
</template>

<script>
    import landFooter from "./landFooter";
    export default {
        name: "landContent",
        data(){
           return{
               index:0,
               flage:0
           }
        },
        methods:{
            click(u){
                this.index=u;
                this.flage=u;
            }
        },
        props:['land','src'],
        components:{
            landFooter
        }
    }
</script>

<style scoped>
    #land{
        width: 3.75rem;

    }
#landContent{
    width: 3rem;
    height: 1.23rem;
    margin: 0rem auto;
    display: flex;
    justify-content: space-between;
    padding-top: 0.7rem;
    border-bottom: 0.01rem gainsboro solid;
}
    #landContent span{
        display: inline-block;
        width: 1.2rem;
        height:0.5rem;
        line-height: 0.5rem;
        font-size: 0.2rem;
        font-weight: 900;

    }
    .gray{
        color: gainsboro;
    }
    .black{
        color: black;
        border-bottom: 0.02rem black solid;
    }
    .pho{
        display: block;
        width: 3rem;
        height: 0.5rem;
        border-bottom: 0.01rem gainsboro solid;
    }
    .pho input{
        width: 2.5rem;
        height: 0.5rem;
        border: 0rem;
        outline: none;
    }
    .landContent{
        height: 2.6rem;
        width: 3rem;
        margin: 0rem auto;
    }
    .landContent button{
        width: 3rem;
        height: 0.5rem;
        background-color: red;
        border: 0rem;
        border-radius: 0.1rem;
        margin-top: 1rem;
        font-size: 0.2rem;
        color: white;
    }
    .pho img{
        width: 0.3rem;
        height: 0.3rem;
    }
</style>