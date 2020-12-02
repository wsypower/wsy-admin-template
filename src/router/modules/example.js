export default [
  // 演示页面
  {
    path: '/page5',
    name: 'page5',
    meta: {
      title: '页面 5',
      auth: true
    },
    component: () =>
      import(/* webpackChunkName: "page1" */ '@/views/demo/page1')
  }
]
