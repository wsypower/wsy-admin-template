const slider = [
  { path: '/index', title: '首页展示数据', icon: 'home' },
  {
    title: '功能试验',
    icon: 'folder-o',
    children: [
      { path: '/index/page2', title: '请求demo' },
      { path: '/index/page3', title: '测试组件大小调整' }
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
