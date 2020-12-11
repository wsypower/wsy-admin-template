const slider = [
  { path: '/home', title: '首页展示数据', icon: 'home' },
  {
    title: '二级页面系列',
    icon: 'folder-o',
    children: [
      { path: '/page1', title: '测试缓存页面' },
      { path: '/page2', title: '页面 2 展示数据' },
      { path: '/page3', title: '页面 3 展示数据' }
    ]
  },
  {
    title: '三级页面系列',
    icon: 'folder-o',
    children: [
      {
        title: '页面 3-1 展示数据',
        children: [
          { title: '页面 3-1-1 展示数据' },
          { title: '页面 3-2-2 展示数据' },
          { title: '页面 3-3-3 展示数据' }
        ]
      },
      { title: '页面 3-2 展示数据' },
      { title: '页面 3-3 展示数据' }
    ]
  },
  {
    title: '四级页面系列',
    icon: 'folder-o',
    children: [
      {
        title: '页面 3-1 展示数据',
        children: [
          { title: '页面 3-1-1' },
          { title: '页面 3-2-2' },
          {
            title: '页面 3-3-3',
            children: [
              { title: '页面 4 展示数据' },
              { title: '页面 4 展示数据' },
              { title: '页面 4 展示数据' }
            ]
          }
        ]
      }
    ]
  }
]
export default slider
