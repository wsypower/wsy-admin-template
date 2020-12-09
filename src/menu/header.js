const header = [
  { path: '/home', title: '测试单页面联动-首页', icon: 'home' },
  {
    title: '测试同页面联动',
    icon: 'folder-o',
    children: [
      { path: '/page1', title: '页面 1' },
      { path: '/page2', title: '页面 2' },
      { path: '/page3', title: '页面 3' }
    ]
  },
  {
    title: '切换相同容器带menu',
    icon: 'folder-o',
    path: '/page-menu/page7'
  },
  {
    title: '切换容器full',
    icon: 'folder-o',
    path: '/page/page5'
  },
  {
    title: '同容器full切换',
    icon: 'folder-o',
    path: '/page-full/page6'
  },
  {
    title: '外联跳转测试',
    icon: 'folder-o',
    path: 'https://element.eleme.cn/#/zh-CN/component/transition'
  }
]
export default header
