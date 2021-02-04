import mapping from "@/views/system/function/mapping/mapping.js";

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
// 通过 dynamic-import-node 插件在babel.config 中配置，使用中就按照vue-router文档编写即可

// ##################################################################### //
// ############################ 不需要动态判断权限的路由 ################### //
// ##################################################################### //
export const frameOut = [
  // 登录
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/system/login/login.vue")
  }
];
/**
 * 错误页面
 */
export const errorPage = [
  {
    path: "*",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "404" */ "@/views/system/error/404/404.vue")
  }
];

/**
 * 函数路由组件
 */
export const functionPage = (name = "") => [
  {
    name: `${name}-not-found`,
    path: "not-found",
    component: mapping,
    hidden: true,
    meta: {
      title: "转发页面"
    }
  }
];

/**
 * 系统模块
 * [log,refresh,redirect]等系统页面内需要调用的页面集合
 */
export const features = (name = "") => [
  // 刷新页面 必须保留
  {
    name: `${name}-refresh`,
    path: "refresh",
    hidden: true,
    component: () =>
      import(
        /* webpackChunkName: "refresh" */ "@/views/system/function/refresh"
      )
  },
  // 页面重定向 必须保留
  {
    path: "redirect/:route*",
    name: `${name}-redirect`,
    hidden: true,
    component: () =>
      import(
        /* webpackChunkName: "redirect" */ "@/views/system/function/redirect"
      )
  }
];
