<template>
    <div id="pageSort">
        <a href="" v-for="(data,u) in img3" :key="u"><img :src="data.src1" alt="" class="pageimgsize"></a>
    </div>
</template>

<script>
    export default {
        name: "pageSort",
        props:['img3']
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