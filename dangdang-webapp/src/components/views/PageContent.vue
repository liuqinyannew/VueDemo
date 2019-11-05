<template>
    <div>
        <div id="ContentImg">
            <a href="" v-for="(data,u) in totals" :key="u"><img :src="data.src1" alt="" class="ContentImg"></a>
        </div>
        <div id="contentA">
            <a href="" v-for="(data,u) in product" :key="u"><img :src="data.src1" alt="" class="contentA"><br><span></span><br><span></span><br><span><del></del></span></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageContent",
        data(){
            return{
                totals:[
                    {src1:require('../../assets/img/mao_title.jpg')}
                ],
                product:[
                    {src1:require('../../assets/img/1128804227-1_h_166.jpg')},
                    {src1:require('../../assets/img/26439655-1_h_9.jpg')},
                    {src1:require('../../assets/img/1545156224-1_h_1.jpg')},
                    {src1:require('../../assets/img/23408306-1_h_13.jpg')},
                    {src1:require('../../assets/img/1338237909-1_h_2.jpg')},
                    {src1:require('../../assets/img/1548863343-1_h_1.jpg')},
                    {src1:require('../../assets/img/1551909362-1_h_1.jpg')}
                ]
            }
        }
    }
</script>

<style scoped>
.ContentImg{
    width: 3.75rem;
    height: 0.4rem;

}
    #ContentImg{
        width: 3.5rem;
        margin-top: 0.1rem;
    }
    .contentA{
        display: inline-block;
        width: 1rem;
        height: ;
    }
    #contentA{
        width: 3.75rem;
        height: 1.5rem;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
</style>