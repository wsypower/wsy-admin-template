export default {
  // 快捷键
  // 支持快捷键 例如 ctrl+shift+s
  hotkey: {
    search: {
      open: 's',
      close: 'esc'
    }
  },
  // 头部menu配置
  headerMenu: {
    // 头部menu是否可展开
    disableCollapse: true
  },
  // 侧边栏默认配置
  menu: {
    asideCollapse: false,
    asideTransition: true
  },
  // 在读取持久化数据失败时默认页面
  page: {
    opened: [
      {
        name: 'index',
        fullPath: '/index',
        meta: {
          title: '首页',
          auth: false
        }
      }
    ]
  },
  // 多页面系统
  tabs: {
    // 是否开启多页面
    show: false
  },
  // 菜单搜索
  search: {
    enable: true
  },
  // 头部显示的工具按钮
  tool: {
    search: true,
    notification: true,
    fullScreen: true,
    theme: true,
    size: true,
    i18n: true,
    color: true
  },
  // 注册的主题
  theme: {
    list: [
      {
        title: '经典淡雅',
        name: 'lightblue',
        preview: 'image/theme/lightblue/preview@2x.png'
      },
      {
        title: '暗色模式',
        name: 'chester',
        preview: 'image/theme/chester/preview@2x.png'
      },
      {
        title: '经典蔚蓝',
        name: 'element',
        preview: 'image/theme/element/preview@2x.png'
      },
      {
        title: '紫罗兰',
        name: 'violet',
        preview: 'image/theme/violet/preview@2x.png'
      },
      {
        title: '简约线条',
        name: 'line',
        backgroundImage: 'image/theme/line/bg.jpg',
        preview: 'image/theme/line/preview@2x.png'
      },
      {
        title: '流星',
        name: 'star',
        backgroundImage: 'image/theme/star/bg.jpg',
        preview: 'image/theme/star/preview@2x.png'
      },
      {
        title: '暗色模式',
        name: 'tomorrow-night-blue',
        preview: 'image/theme/tomorrow-night-blue/preview@2x.png'
      }
    ]
  },
  // 是否默认开启页面切换动画
  transition: {
    active: true
  }
}
