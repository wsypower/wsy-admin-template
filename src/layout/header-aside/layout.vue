<template>
  <div
    class="d2-layout-header-aside-group"
    :style="styleLayoutMainGroup"
    :class="{ grayMode: grayActive }"
  >
    <!-- 半透明遮罩 -->
    <div class="d2-layout-header-aside-mask"></div>
    <!-- 主体内容 -->
    <div class="d2-layout-header-aside-content" flex="dir:top">
      <!-- 顶栏 -->
      <div
        class="d2-theme-header"
        :style="{ opacity: this.searchActive ? 0.5 : 1 }"
        flex-box="0"
        flex
      >
        <router-link
          to="/home"
          :class="{ 'logo-group': true, 'logo-transition': asideTransition }"
          :style="{ width: asideCollapse ? asideWidthCollapse : asideWidth }"
          flex-box="0"
        >
          <div class="logo-group-logo">
            <d2-icon-svg class="logo" name="logo" flex-box="0" />
          </div>
          <transition name="el-fade-in">
            <span class="logo-group-title" v-if="!asideCollapse">{{
              headerTitle
            }}</span>
          </transition>
        </router-link>
        <div class="toggle-aside-btn" @click="handleToggleAside" flex-box="0">
          <d2-icon name="bars" />
        </div>
        <d2-menu-header flex-box="1" />
        <!-- 顶栏右侧 -->
        <div class="d2-header-right" flex-box="0">
          <!-- 如果你只想在开发环境显示这个按钮请添加 v-if="$env === 'development'" -->
          <d2-header-search @click="handleSearchClick" />
          <d2-header-fullscreen />
          <d2-header-theme />
          <d2-header-size />
          <d2-header-locales />
          <d2-header-color />
          <d2-header-user />
        </div>
      </div>
      <!-- 下面 主体 -->
      <div class="d2-theme-container" flex-box="1" flex>
        <transition name="rotate-sides">
          <component :is="layoutContainerMain"></component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import d2MenuSide from './components/menu-side'
import d2MenuHeader from './components/menu-header'
import d2Tabs from './components/tabs'
import d2HeaderFullscreen from './components/header-fullscreen'
import d2HeaderLocales from './components/header-locales'
import d2HeaderSearch from './components/header-search'
import d2HeaderSize from './components/header-size'
import d2HeaderTheme from './components/header-theme'
import d2HeaderUser from './components/header-user'
import d2HeaderColor from './components/header-color'
import { mapState, mapGetters, mapActions } from 'vuex'
import mixinSearch from './mixins/search'
import wContainer from './components/container/container.vue'
import wLayoutContainer from './components/container/layout-container.vue'
import 'vue-transition.css'
export default {
  name: 'd2-layout-header-aside',
  mixins: [mixinSearch],
  components: {
    d2MenuSide,
    d2MenuHeader,
    d2Tabs,
    d2HeaderFullscreen,
    d2HeaderLocales,
    d2HeaderSearch,
    d2HeaderSize,
    d2HeaderTheme,
    d2HeaderUser,
    d2HeaderColor,
    wContainer,
    wLayoutContainer
  },
  data() {
    return {
      // [侧边栏宽度] 正常状态
      asideWidth: '256px',
      // [侧边栏宽度] 折叠状态
      asideWidthCollapse: '65px'
    }
  },
  computed: {
    ...mapState('w-admin', {
      grayActive: state => state.gray.active,
      asideCollapse: state => state.menu.asideCollapse,
      asideTransition: state => state.menu.asideTransition
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
    /**
     * @description 布局组件
     */
    layoutContainerMain() {
      if (this.$route.path === '/page/page5') {
        return 'w-container'
      }
      return 'w-layoutContainer'
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
@import '~@/assets/style/theme/register.scss';
</style>
