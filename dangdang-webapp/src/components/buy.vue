<template>
    <div>
        <Buy-header></Buy-header>
        <buy-content></buy-content>
        <Buy-content-two></Buy-content-two>
    </div>
</template>

<script>
    import BuyHeader from "./views/BuyHeader";
    import BuyContent from "./views/BuyContent";
    import BuyContentTwo from "./views/BuyContentTwo";
    export default {
        name: "buy",
        components:{
            BuyHeader,
            BuyContent,
            BuyContentTwo
        }
    }
</script>

<style scoped>

</style>