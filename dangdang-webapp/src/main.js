import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/router'
import './assets/all.css'
import { Swipe, SwipeItem } from 'vue-swipe';
import 'vue-swipe/dist/vue-swipe.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../node_modules/swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
//注册轮播图
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);
Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  el:"#app",
  router,
  render(h){
    return h(App)
  }
})
