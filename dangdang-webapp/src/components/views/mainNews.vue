<template>
  <div id="mainNews">
      <div id="mainNewsa" >
          <span><img :src="img.srl" alt=""><span class="title">{{img.name1}}</span></span><span>{{img.name2}}&gt;</span>
      </div>
  </div>
</template>

<script>
    export default {
        name: "mainNews",
        props:['img']
    }
</script>

<style scoped>
#mainNews{
    width: 3.75rem;
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.01rem solid gainsboro;
    background-color: white;
}
#mainNewsa{
    width: 3.5rem;
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    margin: 0rem auto;
    line-height: 0.5rem;
}
#mainNewsa span:nth-of-type(1){
    font-size: 0.14rem;
    display: flex;
}
#mainNewsa span:nth-of-type(2){
    color: gainsboro;
    font-size: 0.12rem;
}
#mainNewsa img{
    width: 0.3rem;
    height: 0.3rem;
    margin-top: 0.05rem;
}
    .title{
        margin-left: 0.1rem;
    }
</style>