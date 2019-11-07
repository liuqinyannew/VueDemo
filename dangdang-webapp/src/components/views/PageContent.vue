<template>
    <div>
        <div id="ContentImg">
            <a href="" v-for="(data,u) in pageimg1" :key="u"><img :src="data.src1" alt="" class="ContentImg"></a>
        </div>
        <div id="contentA">
            <a href="" v-for="(data,u) in pageing2" :key="u"><img :src="data.src1" alt="" class="contentA"><br><span></span><br><span></span><br><span><del></del></span></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageContent",
        props:['pageimg1','pageing2']
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