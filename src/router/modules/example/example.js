export default [
  // 演示页面
  {
    path: '/page7',
    name: 'page7',
    meta: {
      title: '测试切换大页面',
      auth: true,
      cache: true
    },
    component: () =>
      import(/* webpackChunkName: "page5" */ '@/views/demo/page7')
  }
]
