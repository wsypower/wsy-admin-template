export default [
  // 演示页面
  {
    path: 'page5',
    name: 'page5',
    meta: {
      title: '测试切换大页面',
      auth: true,
      cache: true,
      hidden: true
    },
    component: () =>
      import(/* webpackChunkName: "page5" */ '@/views/demo/page5')
  }
]
