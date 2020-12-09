import layoutHeaderAside from '@/layout/header-aside'
export default [
  // 演示页面
  {
    path: '/page-menu',
    name: 'page-menu',
    meta: {
      title: '页面 7',
      auth: true
    },
    component: layoutHeaderAside,
    children: [
      {
        path: 'page7',
        name: 'page7',
        meta: {
          title: '切换相同带menu容器',
          auth: true,
          cache: true
        },
        component: () =>
          import(/* webpackChunkName: "page5" */ '@/views/demo/page7')
      }
    ]
  }
]
