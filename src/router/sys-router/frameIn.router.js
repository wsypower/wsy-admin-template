// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
// 通过 dynamic-import-node 插件在babel.config 中配置，使用中就按照vue-router文档编写即可

import layout from '@/layout/header-aside'

// ##################################################################### //
// ########################### 通常需要登录或权限认证的路由 ################# //
// ##################################################################### //
export const frameIn = [
  // 首页主路由
  {
    path: '/',
    name: 'root',
    redirect: { name: 'index' },
    component: layout,
    meta: {},
    children: [
      // 演示页面
      {
        path: '/example-full',
        name: 'example-full',
        meta: {
          title: '页面 5',
          auth: true,
          full: true,
          hidden: true
        },
        component: layout
      },
      // 系统 前端日志
      {
        path: 'log',
        name: 'log',
        meta: {
          title: '前端日志',
          auth: true
        },
        component: () =>
          import(/* webpackChunkName: "log" */ '@/views/system/log')
      },
      // 刷新页面 必须保留
      {
        path: 'refresh',
        name: 'refresh',
        hidden: true,
        component: () =>
          import(
            /* webpackChunkName: "refresh" */ '@/views/system/function/refresh'
          )
      },
      // 页面重定向 必须保留
      {
        path: 'redirect/:route*',
        name: 'redirect',
        hidden: true,
        component: () =>
          import(
            /* webpackChunkName: "redirect" */ '@/views/system/function/redirect'
          )
      }
    ]
  }
]
