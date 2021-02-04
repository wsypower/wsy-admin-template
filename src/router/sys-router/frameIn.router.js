// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
// 通过 dynamic-import-node 插件在babel.config 中配置，使用中就按照vue-router文档编写即可

import layout from "@/layout/header-aside";
import modulesRouter from "../utils/utils";
import { functionPage, features } from "./sys.router";
//
// ────────────────────────────────────────────────────────────── II ──────────
//   :::::: ROUTER : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────
// 收集的模块路由
//
const MODULES_ROUTER = modulesRouter.map(item => {
  item.children = [
    ...item.children,
    ...functionPage(item.name),
    ...features(item.name)
  ];
  return { ...item, redirect: { name: `${item.name}-not-found` } };
});
console.log(modulesRouter);

export const frameIn = [
  // 首页主路由
  {
    path: "/",
    name: "root",
    component: layout,
    redirect: { name: `root-not-found` },
    meta: {},
    children: [...MODULES_ROUTER, ...functionPage("root")]
  }
];
