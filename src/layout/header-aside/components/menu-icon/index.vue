<template>
  <div class="menu-icon">
    <div
      id="menu-icon-wrapper"
      class="menu-icon-wrapper"
      :class={open:asideCollapse}
      style="visibility: visible;"
    >
      <svg
        width="1000px"
        height="1000px"
      >
        <path
          class="path1"
          d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"
        ></path>
        <path
          class="path2"
          d="M 300 500 L 700 500"
        ></path>
        <path
          class="path3"
          d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
// import anime from 'animejs/lib/anime.es.js'
import { mapState } from 'vuex'
export default {
  name: 'menu-icon',
  computed: {
    ...mapState('w-admin', {
      asideCollapse: state => state.menu.asideCollapse
    })
  }
}
</script>

<style lang="scss" scoped>
.menu-icon {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
}
.menu-icon-wrapper {
  position: absolute;
  width: 34px;
  height: 34px;
  pointer-events: none;
  transition: 0.1s;
  svg {
    position: absolute;
    top: -18px;
    left: -15px;
    transform: scale(0.07);
    transform-origin: 0 0;
    path {
      stroke-width: 35px;
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: transparent;
      transition: stroke-dasharray 0.5s;
      &.path1 {
        stroke-dashoffset: 5803.15px;
        stroke-dasharray: 2901.57px, 2981.57px, 240px;
      }
      &.path2 {
        stroke-dashoffset: 800px;
        stroke-dasharray: 400px, 480px, 240px;
      }
      &.path3 {
        stroke-dashoffset: 6993.11px;
        stroke-dasharray: 3496.56px, 3576.56px, 240px;
      }
    }
  }
  &.open {
    svg {
      path {
        &.path1 {
          stroke-dasharray: 2881.57px, 5258.15px, 133px;
        }
        &.path2 {
          stroke-dasharray: 400px, 600px, 0px;
          opacity: 0;
        }
        &.path3 {
          stroke-dasharray: 3476.56px, 6448.11px, 133px;
        }
      }
    }
  }
}
</style>
