<template>
    <div id="pageSort">
        <a href="" v-for="(data,u) in total" :key="u"><img :src="data.src1" alt="" class="pageimgsize"></a>
    </div>
</template>

<script>
    export default {
        name: "pageSort",
        data(){
            return{
                total:[
                    {
                        src1:require('../../assets/img/chagnxiao-1562827477.png')
                    },
                    {
                        src1:require('../../assets/img/xinshu-1563173497.png')
                    },
                    {
                        src1:require('../../assets/img/SY-iCON-3-5.10-1557488951.png')
                    },
                    {
                        src1:require('../../assets/img/icon-cx-1559818801.png')
                    },
                    {
                        src1:require('../../assets/img/chagnxiao-1562827477.png')
                    },
                    {
                        src1:require('../../assets/img/116550067538580_y.jpg')
                    },
                    {
                        src1:require('../../assets/img/7chaoshi-1545121233.png')
                    },
                    {
                        src1:require('../../assets/img/00000-1564393723.png')
                    },
                    {
                        src1:require('../../assets/img/9zhongxin-1545121233.png')
                    },
                    {
                        src1:require('../../assets/img/12311-1556245256.jpg')
                    }
                ]
            }
        }
    }
</script>

<style scoped>
.pageimgsize{
    width: 0.75rem;
    height: 0.7rem;
}
    #pageSort{
        width: 3.75rem;
        height: 1.4rem;
        margin: 0rem auto;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
</style>