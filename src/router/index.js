import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main/main'
import me from '@/components/me/me'
import message from '@/components/message/message'
import order from '@/components/order/order'

Vue.use(Router)

// 设置路由
const routes = [
  {
    path: '',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'main',
    component: main
  }, {
    path: '/me',
    name: 'me',
    component: me
  },
  {
    path: '/message',
    name: 'message',
    component: message
  },
  {
    path: '/order',
    name: 'order',
    component: order
  }
]

const router = new Router({routes})

export default router
