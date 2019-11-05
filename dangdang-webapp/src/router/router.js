import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../components/index'
import page from '../components/page'
import buy from '../components/buy'
import cart from '../components/cart'
import sort from '../components/sort'
import main from '../components/main'
Vue.use(VueRouter)
let router = new VueRouter({
    routes:[
        {
            path:"/",
            redirect:"/page"
        },
        {
            path:"/page",
            component:index,
            children:[
                {
                    path:"",
                    component: page
                },
                {
                    path:"cart",
                    component: cart
                },
                {
                    path:"buy",
                    component: buy
                },
                {
                    path:"main",
                    component: main
                },
                {
                    path:"sort",
                    component: sort
                }
            ]
        }
    ]
})
export default router