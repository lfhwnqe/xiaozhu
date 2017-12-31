import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main/main'
import me from '@/components/me/me'
import message from '@/components/message/message'
import order from '@/components/order/order'
import houseInfo from '@/components/houseInfo/houseInfo'

Vue.use(Router)
// 设置路由
const routes = [
  {
    path: '/houseinfo',
    component: houseInfo,
    name: 'info',
    meta: {
      name: '房间详情'
    }
  }
]

const navBar = [
  {
    path: '',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'main',
    component: main,
    meta: {
      name: '发现',
      url: '../static/img/discover.svg',
      actUrl: '../static/img/disac.svg'
    },
    children: [
      {
        path: 'houseinfo',
        component: houseInfo,
        name: 'info'
      }
    ]
  },
  {
    path: '/order',
    name: 'order',
    component: order,
    meta: {
      name: '订单',
      url: '../static/img/order.svg',
      actUrl: '../static/img/orderac.svg'
    }
  },
  {
    path: '/message',
    name: 'message',
    component: message,
    meta: {
      name: '消息',
      url: '../static/img/meg.svg',
      actUrl: '../static/img/msgac.svg'
    }
  },
  {
    path: '/me',
    name: 'me',
    component: me,
    meta: {
      name: '我',
      url: '../static/img/me.svg',
      actUrl: '../static/img/meact.svg'
    }
  }
]

routes.push(...navBar)

const router = new Router({
  mode: 'history',
  routes
})

export {router, navBar, routes}
