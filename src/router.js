import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const demoRouter = [
  {
    path: 'welcome',
    name: 'welcome',
    meta: {
      title: '欢迎页'
    },
    component: () => import('@/views/example/welcome')
  },
  {
    path: 'cascadeDelete',
    name: 'cascadeDelete',
    meta: {
      title: '联级删除'
    },
    component: () => import('@/views/example/cascadeDelete')
  },
  {
    path: 'toolbar',
    name: 'toolbar',
    meta: {
      title: '工具箱'
    },
    component: () => import('@/views/example/toolbar')
  },
  {
    path: 'customToolbar',
    name: 'customToolbar',
    meta: {
      title: '自定义工具箱'
    },
    component: () => import('@/views/example/customToolbar/customToolbar')
  },
  {
    path: 'htmlLabel',
    name: 'htmlLabel',
    meta: {
      title: 'HTML标签'
    },
    component: () => import('@/views/example/htmlLabel/htmlLabel')
  }
]

export const globalRouter = [
  {
    path: '/',
    name: 'home',
    redirect: '/welcome',
    component: () => import('./views/Home.vue'),
    children: [
      ...demoRouter
    ]
  },
]

export default new Router({
  routes: [...globalRouter]
})
