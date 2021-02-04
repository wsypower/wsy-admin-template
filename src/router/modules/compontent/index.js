import { layoutContainer } from "@/layout/header-aside";
export default [
  // 首页
  {
    path: "component",
    name: "component",
    meta: {
      auth: true,
      title: "组件"
    },
    component: layoutContainer,
    children: [
      // 组件演示页面
      {
        path: "page6",
        name: "page6",
        meta: {
          title: "page6",
          auth: true
        },
        component: () =>
          import(/* webpackChunkName: "page6" */ "@/views/demo/page6")
      },
      {
        path: "page7",
        name: "page7",
        meta: {
          title: "page7",
          auth: true
        },
        component: () =>
          import(/* webpackChunkName: "page7" */ "@/views/demo/page7")
      }
    ]
  }
];
