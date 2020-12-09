<!--
 * @Description:
 * @Author: huacong
 * @Date: 2020-12-07 22:15:20
 * @LastEditTime: 2020-12-09 21:30:11
 * @LastEditors: huacong
-->
<template>
  <div class="container">
    <!-- 搜索 -->
    <transition name="fade-scale">
      <div v-if="searchActive" class="d2-theme-container-main-layer" flex>
        <d2-panel-search ref="panelSearch" @close="searchPanelClose" />
      </div>
    </transition>
    <transition name="fade-scale">
      <div class="container-main" v-if="!searchActive">
        <transition :name="transition">
          <router-view class="container-view"></router-view>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import mixinSearch from '../../mixins/search'
export default {
  mixins: [mixinSearch],
  name: 'w-container',
  computed: {
    ...mapState('w-admin', {
      transition: state => state.container.transition
    })
  }
}
</script>
<style lang="scss">
// 注册主题
@import '~@/assets/style/theme/register.scss';
.container {
  width: 100%;
  height: 100%;
  position: relative;

  .container-main {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    overflow: hidden;
    perspective: 1200px;
    .container-view {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      overflow: hidden;
      backface-visibility: hidden;
      transform: translate3d(0, 0, 0);
      transform-style: preserve-3d;
      visibility: visible;
    }
  }
}
</style>
