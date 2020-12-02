import layoutHeaderAside from "@/layout/header-aside";
// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
// 通过 dynamic-import-node 插件在babel.config 中配置，使用中就按照vue-router文档编写即可

/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: "/",
    redirect: { name: "index" },
    component: layoutHeaderAside,
    children: [
      // 首页
      {
        path: "index",
        name: "index",
        meta: {
          auth: true
        },
        component: () =>
          import(/* webpackChunkName: "index" */ "@/views/system/index")
      },
      // 演示页面
      {
        path: "page1",
        name: "page1",
        meta: {
          title: "页面 1",
          auth: true
        },
        component: () =>
          import(/* webpackChunkName: "page1" */ "@/views/demo/page1")
      },
      {
        path: "page2",
        name: "page2",
        meta: {
          title: "页面 2",
          auth: true
        },
        component: () =>
          import(/* webpackChunkName: "page2" */ "@/views/demo/page2")
      },
      {
        path: "page3",
        name: "page3",
        meta: {
          title: "页面 3",
          auth: true
        },
        component: () =>
          import(/* webpackChunkName: "page3" */ "@/views/demo/page3")
      },
      // 系统 前端日志
      {
        path: "log",
        name: "log",
        meta: {
          title: "前端日志",
          auth: true
        },
        component: () =>
          import(/* webpackChunkName: "log" */ "@/views/system/log")
      },
      // 刷新页面 必须保留
      {
        path: "refresh",
        name: "refresh",
        hidden: true,
        component: () =>
          import(
            /* webpackChunkName: "refresh" */ "@/views/system/function/refresh"
          )
      },
      // 页面重定向 必须保留
      {
        path: "redirect/:route*",
        name: "redirect",
        hidden: true,
        component: () =>
          import(
            /* webpackChunkName: "redirect" */ "@/views/system/function/redirect"
          )
      }
    ]
  }
];

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登录
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/system/login")
  }
];

/**
 * 错误页面
 */
const errorPage = [
  {
    path: "*",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "404" */ "@/views/system/error/404")
  }
];

// 导出需要显示菜单的
export const frameInRoutes = frameIn;

// 重新组织后导出
export default [...frameIn, ...frameOut, ...errorPage];
