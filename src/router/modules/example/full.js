import layoutHeaderAside from '@/layout/header-aside'
export default [
  // 演示页面
  {
    path: 'page5',
    name: 'page5',
    meta: {
      title: '测试切换full容器',
      auth: true,
    },
    component: () =>
      import(/* webpackChunkName: "page6" */ '@/views/demo/page5')
  },
  {
    path: 'page6',
    name: 'page6',
    hidden: true,
    meta: {
      title: '测试切换full容器',
      auth: true,
      cache: false
    },
    children: [],
    component: () =>
      import(/* webpackChunkName: "page6" */ '@/views/demo/page6')
  }
]
