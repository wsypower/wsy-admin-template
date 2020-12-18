const slider = [
  { path: '/index', title: '首页展示数据', icon: 'home' },
  {
    path: '/publish',
    title: '发布系统',
    icon: 'home',
    children: [
      {
        path: '/publish/list',
        title: '发布系统列表项',
        icon: 'home'
      },
      {
        path: '/publish/add',
        title: '新增发布',
        icon: 'home',
        hide: true
      }
    ]
  },
  {
    title: '功能试验',
    icon: 'folder-o',
    children: [
      { path: '/page1', title: '测试缓存页面' },
      { path: '/page2', title: '请求demo' },
      { path: '/page3', title: '测试组件大小调整' }
    ]
  },
  {
    title: '展示多层嵌套',
    icon: 'folder-o',
    children: [
      {
        title: '展示多层嵌套',
        children: [
          { title: '临时菜单' },
          { title: '临时菜单' },
          {
            title: '临时菜单',
            children: [
              { title: '临时菜单' },
              { title: '临时菜单' },
              { title: '临时菜单' }
            ]
          }
        ]
      }
    ]
  }
]
export default slider
