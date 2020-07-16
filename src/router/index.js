import Vue from 'vue'
import Router from 'vue-router'
import StockIndex from '@/module/stock/page/StockIndex.vue'
import HelloWorld from '@/components/HelloWorld.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/stock/stockIndex',
      name: '股票首页',
      component: StockIndex
    },
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld
    }
  ],
  mode: 'history'
})
