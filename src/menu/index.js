import { uniqueId } from 'lodash'

/**
 * @description 给菜单数据补充上 path 字段
 * @description FIX:左侧菜单栏列出所有菜单，在点击二级菜单后，上级菜单会折叠起来
 * @param {Array} menu 原始的菜单数据
 */
function supplementPath(menu) {
  return menu.map(e => ({
    ...e,
    path: e.path || uniqueId('d2-menu-empty-'),
    ...(e.children
      ? {
        children: supplementPath(e.children)
      }
      : {})
  }))
}

export const menuHeader = supplementPath([
  { path: '/home', title: '首页', icon: 'home' },
  {
    title: '页面',
    icon: 'folder-o',
    children: [
      { path: '/page1', title: '页面 1' },
      { path: '/page2', title: '页面 2' },
      { path: '/page3', title: '页面 3' }
    ]
  },
  {
    title: '测试切换',
    icon: 'folder-o',
    path: '/page/page5',
    title: '页面 5'
  },
  {
    title: '外联跳转',
    icon: 'folder-o',
    path: 'https://element.eleme.cn/#/zh-CN/component/transition',
    title: 'ElementUI'
  }
])

export const menuAside = supplementPath([
  { path: '/home', title: '首页展示数据', icon: 'home' },
  {
    title: '页面系列展示数据',
    icon: 'folder-o',
    children: [
      { path: '/page1', title: '页面 1展示数据' },
      { path: '/page2', title: '页面 2展示数据' },
      { path: '/page3', title: '页面 3展示数据' }
    ]
  }
])
