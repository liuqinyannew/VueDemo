<template>
   <div id="sort-content-right">
       <div id="sort-content">
           <div id="flex">
               <ul>
                   <li v-for="(data,u) in book" :key="u" class="sort-content-li" @click.prevent="click1(u)" :class="index==u?'red':'normal'">{{data.content}}</li>
               </ul>
           </div>
       </div>
       <sort-right :books="books.books1" :img="img" v-if="flage==0"></sort-right>
       <sort-right :books="books.books2" :img="img" v-if="flage==1"></sort-right>
       <sort-right :books="books.books3" :img="img" v-if="flage==2"></sort-right>
       <sort-right :books="books.books4" :img="img" v-if="flage==3"></sort-right>
       <sort-right :books="books.books5" :img="img" v-if="flage==4"></sort-right>
       <sort-right :books="books.books6" :img="img" v-if="flage==5"></sort-right>
       <sort-right :books="books.books7" :img="img" v-if="flage==6"></sort-right>
       <sort-right :books="books.books8" :img="img" v-if="flage==7"></sort-right>
       <sort-right :books="books.books9" :img="img" v-if="flage==8"></sort-right>
   </div>
</template>

<script>
    import sortRight from "./sortRight";
    export default {
        name: "SortContent",
        props:['book','books','img'],
        components:{
            sortRight
        },
        data(){
            return{
                index:0,
                flage:0
            }
        },
        methods:{
            click1(u){
                this.index=u;
                this.flage=u;
            }
        }
    }
</script>

<style scoped>
    #sort-content-right{
        width: 3.75rem;
        display: flex;
        background-color: rgb(242,242,242);
    }
#sort-content{
    width: 0.8rem;
}
#flex{
    position: fixed;
    top: 0.4rem;
}
    .sort-content-li{
        width: 0.8rem;
        height: 0.45rem;
        line-height: 0.45rem;
        background-color: white;

    }
    .red {
        color: #d81e06;
        background-color: rgb(242,242,242);
    }
</style>