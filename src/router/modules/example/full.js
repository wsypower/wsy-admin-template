import layoutHeaderAside from '@/layout/header-aside'
export default [
  // 演示页面
  {
    path: '/full',
    name: 'full',
    meta: {
      title: '测试切换full容器',
      auth: true,
      full: true,
      hidden: true
    },
    children: [
      {
        path: 'page6',
        name: 'page6',
        meta: {
          title: '测试切换full容器',
          auth: true,
          cache: false,
          hidden: true
        },
        children: [],
        component: () =>
          import(/* webpackChunkName: "page6" */ '@/views/demo/page6')
      }
    ],
    component: layoutHeaderAside
  }
]
