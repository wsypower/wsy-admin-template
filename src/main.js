// Vue
import Vue from 'vue'
import App from './App'
// 核心插件
import wAdmin from '@/plugin/w-admin'
// store
import store from '@/store/index'
// 菜单和路由设置
import router from './router'
import { menuHeader, menuAside } from '@/menu'
import { frameInRoutes } from '@/router/routes'
import { flatten } from 'lodash'
// 核心插件
Vue.use(wAdmin)
new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    // 处理顶级菜单（清空操作）
    // this.$store.dispatch("w-admin/page/closeAll");
    // 处理路由 得到每一级的路由设置
    this.$store.commit('w-admin/page/init', frameInRoutes)
    // 设置顶栏菜单
    this.$store.commit('w-admin/menu/headerSet', menuHeader)
    // 设置侧边栏菜单
    this.$store.commit('w-admin/menu/asideSet', menuAside)
    // 初始化菜单搜索功能
    this.$store.commit('w-admin/search/init', menuHeader)
    // 初始化layout容器组件选择
    this.$store.dispatch('w-admin/container/initViewLayout', frameInRoutes)
  },
  mounted() {
    // 展示系统信息
    this.$store.commit('w-admin/releases/versionShow')
    // 用户登录后从数据库加载一系列的设置
    this.$store.dispatch('w-admin/account/load')
    // 获取并记录用户 UA
    this.$store.commit('w-admin/ua/get')
    // 初始化全屏监听
    this.$store.dispatch('w-admin/fullscreen/listen')
    // 开始用socket.io监听badge数据
    this.$store.dispatch('w-admin/badge/getBadge')
  },
  watch: {
    // 检测路由变化切换侧边栏内容
    '$route.matched': {
      handler(matched) {
        if (matched.length > 1) {
          const _side = menuAside.filter(
            menu => !!~menu.path.search(matched[1].path)
          )
          const poolCurrent = matched[matched.length - 1]

          const setSlider =
            _side.length > 0 ? flatten(_side.map(e => e.children || e)) : []

          this.$store.commit('w-admin/menu/asideSet', setSlider)
          this.$store.commit(
            'w-admin/page/setPoolCurrentGroupPage',
            poolCurrent
          )
        }
      },
      immediate: true
    }
  }
}).$mount('#app')
