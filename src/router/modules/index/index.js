import { layoutContainer } from "@/layout/header-aside";
import mapping from "@/views/system/function/mapping/mapping.js";
export default [
  // 首页
  {
    path: "index",
    name: "index",
    meta: {
      auth: true,
      title: "首页"
    },
    component: layoutContainer,
    redirect: { name: "not-found" },
    children: [
      {
        name: "not-found",
        path: "not-found",
        component: mapping,
        hidden: true,
        meta: {
          title: "转发页面"
        }
      },
      // 演示路由页面
      {
        path: "page1",
        name: "page1",
        meta: {
          title: "page1",
          auth: true,
          cache: true
        },
        component: () =>
          import(/* webpackChunkName: "page1" */ "@/views/demo/page1")
      },
      {
        path: "page2",
        name: "page2",
        meta: {
          title: "page2",
          auth: true
        },
        component: () =>
          import(/* webpackChunkName: "page2" */ "@/views/demo/page2")
      },
      {
        path: "page3",
        name: "page3",
        meta: {
          title: "page3",
          auth: true
        },
        component: () =>
          import(/* webpackChunkName: "page3" */ "@/views/demo/page3")
      },
      {
        path: "page4",
        name: "page4",
        meta: {
          title: "page4",
          auth: true
        },
        component: () =>
          import(/* webpackChunkName: "page4" */ "@/views/demo/page4")
      },
      {
        path: "page5",
        name: "page5",
        meta: {
          title: "page5",
          auth: true
        },
        component: () =>
          import(/* webpackChunkName: "page5" */ "@/views/demo/page5")
      }
    ]
  }
];
