export default {
  index: 0,
  path: "/index",
  title: "首页",
  icon: "home",
  children: [
    { path: "/index/page1", title: "page1" },
    { path: "/index/page2", title: "page2" },
    {
      title: "page4",
      icon: "folder-o",
      path: "/index/page4"
    },
    {
      title: "page",
      icon: "folder-o",
      children: [
        {
          title: "功能暂未上线",
          icon: "folder-o"
        },
        {
          title: "功能暂未上线",
          icon: "folder-o"
        },
        {
          title: "功能暂未上线",
          icon: "folder-o"
        },
        {
          title: "功能暂未上线",
          icon: "folder-o"
        }
      ]
    }
  ]
};
