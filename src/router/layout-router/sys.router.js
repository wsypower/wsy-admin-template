// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
// 通过 dynamic-import-node 插件在babel.config 中配置，使用中就按照vue-router文档编写即可

// ##################################################################### //
// ############################ 不需要动态判断权限的路由 ################### //
// ##################################################################### //
export const frameOut = [
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/system/login')
  }
]
/**
 * 错误页面
 */
export const errorPage = [
  {
    path: '*',
    name: '404',
    component: () =>
      import(/* webpackChunkName: "404" */ '@/views/system/error/404')
  }
]
