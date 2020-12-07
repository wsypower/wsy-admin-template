import layoutHeaderAside from '@/layout/header-aside'
export default [
  // 演示页面
  {
    path: '/page',
    name: 'page',
    meta: {
      title: '页面 5',
      auth: true
    },
    component: layoutHeaderAside,
    children: [
      {
        path: 'page5',
        name: 'page5',
        meta: {
          title: '测试切换大页面',
          auth: true,
          cache: true
        },
        component: () =>
          import(/* webpackChunkName: "page5" */ '@/views/demo/page5')
      }
    ]
    // children: (pre=>[
    //   {
    //     path: 'page6',
    //     name: `${pre}page6`,
    //     meta: {
    //       title: '测试切换大页面',
    //       auth: true,
    //       cache: true
    //     },
    //     component: () =>
    //       import(/* webpackChunkName: "page5" */ '@/views/demo/page5')
    //   }
    // ])('page-')
  }
]
