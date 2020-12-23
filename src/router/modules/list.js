export default [
  {
    path: 'page10',
    name: 'page10',
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
