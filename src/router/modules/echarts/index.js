import { fullContainer } from "@/layout/header-aside";
export default [
  // 首页
  {
    path: "echarts",
    name: "echarts",
    meta: {
      auth: true,
      title: "echarts"
    },
    component: fullContainer,
    children: [
      {
        name: "page3",
        path: "page3",
        component: () =>
          import(/* webpackChunkName: "page1" */ "@/views/demo/page3"),
        hidden: true,
        meta: {
          title: "page3"
        }
      }
    ]
  }
];
