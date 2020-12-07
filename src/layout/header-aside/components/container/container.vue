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
        <router-view></router-view>
      </div>
    </transition>
  </div>
</template>

<script>
import mixinSearch from '../../mixins/search'
export default {
  mixins: [mixinSearch],
  name: 'w-container'
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
  }
}
</style>
