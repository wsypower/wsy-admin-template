export default {
  path: '/index',
  title: '首页',
  icon: 'home',
  children: [
    { path: '/index/page1', title: '请求demo' },
    { path: '/index/page2', title: '请求demo' },
    {
      title: '切换容器full',
      icon: 'folder-o',
      children: [
        {
          title: '切换容器full',
          icon: 'folder-o'
        },
        {
          title: '切换容器full',
          icon: 'folder-o'
        },
        {
          title: '切换容器full',
          icon: 'folder-o'
        },
        {
          title: '切换容器full',
          icon: 'folder-o'
        }
      ]
    },
    {
      title: '切换容器full',
      icon: 'folder-o'
    },
    {
      title: '切换容器full',
      icon: 'folder-o'
    }
  ]
}
