<template>
<div>
    <sort-header></sort-header>
    <sort-content></sort-content>
</div>

</template>
<script>
    import SortHeader from "./views/SortHeader";
    import SortContent from "./views/SortContent";
    export default {
        name: "sort",
        components:{
            SortHeader,
            SortContent
        }
    }
</script>

<style scoped>

</style>