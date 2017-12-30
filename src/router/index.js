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
    component: main,
    meta: {
      name: '发现'
    }
  },
  {
    path: '/order',
    name: 'order',
    component: order,
    meta: {
      name: '订单'
    }
  },
  {
    path: '/message',
    name: 'message',
    component: message,
    meta: {
      name: '消息'
    }
  },
  {
    path: '/me',
    name: 'me',
    component: me,
    meta: {
      name: '我'
    }
  }
]

const router = new Router({routes})

export {router, routes}
