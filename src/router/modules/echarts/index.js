import { layoutContainer } from "@/layout/header-aside";
import mapping from "@/views/system/function/mapping/mapping.js";
export default [
  // 首页
  {
    path: "echarts",
    name: "echarts",
    meta: {
      auth: true,
      title: "echarts"
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
      {
        name: "page3",
        path: "page3",
        component: mapping,
        hidden: true,
        meta: {
          title: "page3"
        }
      }
    ]
  }
];
