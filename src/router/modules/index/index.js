import { layoutContainer } from "@/layout/header-aside";
export default [
  // 首页
  {
    path: "index",
    name: "index",
    meta: {
      auth: true,
      title: "首页"
    },
    redirect: { name: "page1" },
    component: layoutContainer,
    children: [
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
