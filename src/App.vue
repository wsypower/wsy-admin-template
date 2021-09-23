<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import '~@/assets/style/public-class.scss';
#app {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  perspective: 1200px;
}
.app .app-router-view {
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
</style>
