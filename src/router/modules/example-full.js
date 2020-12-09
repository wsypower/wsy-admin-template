import layoutHeaderAside from '@/layout/header-aside'
export default [
  // 演示页面
  {
    path: '/page-full',
    name: 'page-full',
    meta: {
      title: '页面 6',
      auth: true,
      full: true
    },
    component: layoutHeaderAside,
    children: [
      {
        path: 'page6',
        name: 'page6',
        meta: {
          title: '切换同full容器页面',
          auth: true,
          cache: true
        },
        component: () =>
          import(/* webpackChunkName: "page6" */ '@/views/demo/page6')
      }
    ]
  }
]
