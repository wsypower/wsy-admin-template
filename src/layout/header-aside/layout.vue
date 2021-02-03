<template>
  <div
    class="w-layout-header-aside-group"
    :style="styleLayoutMainGroup"
    :class="{ grayMode: grayActive }"
  >
    <!-- [半透明遮罩] -->
    <div class="w-layout-header-aside-mask"></div>
    <!-- [主体内容] -->
    <div
      class="w-layout-header-aside-content"
      flex="dir:top"
    >
      <!-- [顶栏] -->
      <div
        class="w-theme-header"
        :style="{ opacity: this.searchActive ? 0.5 : 1 }"
        flex-box="0"
        flex
      >
        <router-link
          to="/index"
          :class="{ 'logo-group': true, 'logo-transition': asideTransition }"
          :style="{ width: asideCollapse ? asideWidthCollapse : asideWidth }"
          flex-box="0"
        >
          <div class="logo-group-logo">
            <d2-icon-svg
              class="logo"
              name="logo"
              flex-box="0"
            />
          </div>
          <transition name="el-fade-in">
            <span
              class="logo-group-title"
              v-if="!asideCollapse"
            >{{
              headerTitle
            }}</span>
          </transition>
        </router-link>
        <div
          class="toggle-aside-btn"
          @click="handleToggleAside"
          flex-box="0"
        >
          <d2-icon name="bars" />
          <!-- <menu-icon :open='asideCollapse' /> -->
        </div>
        <w-menu-header flex-box="1" />
        <!-- 顶栏右侧 -->
        <div
          class="w-header-right"
          flex-box="0"
        >

          <w-notification v-if="tool.notification" />
          <!-- 如果你只想在开发环境显示这个按钮请添加 v-if="$env === 'development'" -->
          <w-header-search
            @click="handleSearchClick"
            v-if="tool.search"
          />
          <w-header-fullscreen v-if="tool.fullScreen" />
          <w-header-color-pattern />
          <w-header-user />
        </div>
      </div>
      <!-- 下面 主体 -->
      <div
        class="w-theme-container transition-persoective"
        flex-box="1"
        flex
      >
        <transition :name="transition">
          <!-- 相同组件不刷新页面,绑定一个不重复的key   :key='routerViewKey'-->
          <router-view
            class="transition-container"
            :key="routerPagesKey"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import wMenuSide from './components/menu-side'
import wMenuHeader from './components/menu-header'
import wTabs from './components/tabs'
import wHeaderFullscreen from './components/header-fullscreen'
import wHeaderSearch from './components/header-search'
import wHeaderUser from './components/header-user'
import wHeaderColorPattern from './components/header-color-pattern'
import wContainer from './components/container/container.vue'
import wLayoutContainer from './components/container/layout-container.vue'
import wNotification from './components/w-notification/index.vue'
import mixinSearch from './mixins/search'
import menuIcon from './components/menu-icon'
import { mapState, mapGetters, mapActions } from 'vuex'
import 'vue-transition.css'
import setting from '@/setting'

export default {
  name: 'd2-layout-header-aside',
  mixins: [mixinSearch],
  components: {
    wMenuSide,
    wMenuHeader,
    wTabs,
    wHeaderFullscreen,
    wHeaderSearch,
    wHeaderUser,
    wHeaderColorPattern,
    wContainer,
    wLayoutContainer,
    wNotification,
    menuIcon
  },
  data() {
    return {
      // [侧边栏宽度] 正常状态
      asideWidth: '256px',
      // [侧边栏宽度] 折叠状态
      asideWidthCollapse: '65px',
      /**
       * [settring] 的头部工具配置项
       * --------------------
       * | search      搜索
       * | fullScreen  全屏
       * | theme       主题
       * | size        设置大小
       * | i18n        多国语言
       * | color       颜色设置
       * --------------------
       */
      tool: setting.tool
    }
  },
  computed: {
    ...mapState('w-admin', {
      grayActive: state => state.gray.active,
      asideCollapse: state => state.menu.asideCollapse,
      asideTransition: state => state.menu.asideTransition,
      transition: state => state.container.transition,
      fullLayout: state => state.container.fullLayout
    }),
    ...mapGetters('w-admin', {
      themeActiveSetting: 'theme/activeSetting'
    }),
    /**
     * header-title
     */
    headerTitle() {
      return process.env.VUE_APP_PROJECT_NAME
    },
    /**
     * @description 最外层容器的背景图片样式
     */
    styleLayoutMainGroup() {
      return this.themeActiveSetting.backgroundImage
        ? {
            backgroundImage: `url('${this.$baseUrl}${this.themeActiveSetting.backgroundImage}')`
          }
        : {}
    },
    routerPagesKey() {
      return this.$route.matched.length > 1
        ? this.$route.matched[1].path
        : this.$route.path
    }
  },
  methods: {
    ...mapActions('w-admin/menu', ['asideCollapseToggle']),
    /**
     * 接收点击切换侧边栏的按钮
     */
    handleToggleAside() {
      this.asideCollapseToggle()
    }
  }
}
</script>

<style lang="scss">
// 注册主题
@import "~@/assets/style/theme/register.scss";
</style>
