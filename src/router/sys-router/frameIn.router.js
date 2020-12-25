// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
// 通过 dynamic-import-node 插件在babel.config 中配置，使用中就按照vue-router文档编写即可

import layout from '@/layout/header-aside'
import modulesRouter from '../utils/utils'

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: UTIL_ROUTER : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
// [log,refresh,redirect]等系统页面内需要调用的页面集合
//
const UTIL_ROUTER = [
  // 系统 前端日志
  {
    path: 'log',
    name: 'log',
    meta: {
      title: '前端日志',
      auth: true
    },
    component: () => import(/* webpackChunkName: "log" */ '@/views/system/log')
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

//
// ────────────────────────────────────────────────────────────── II ──────────
//   :::::: ROUTER : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────
// 收集的模块路由
//
const MODULES_ROUTER = modulesRouter

export const frameIn = [
  // 首页主路由
  {
    path: '/',
    name: 'root',
    redirect: { name: 'index' },
    component: layout,
    meta: {},
    children: [...MODULES_ROUTER, ...UTIL_ROUTER]
  }
]
