<template>
  <d2-container>
    <template slot="header">Page 1 header</template>
    Hello World
    <el-button
      type="primary"
      v-burst:burst
    ></el-button>
  </d2-container>
</template>

<script>
//      @click='handler'

// v-burst:smoke
import mojs from '@mojs/core'
export default {
  name: 'page1',
  mounted() {
    console.log('测试缓存页面')
    console.log(this.key++)
  },
  data() {
    return {
      mojs: false,
      mojsOptions: {
        left: 0,
        top: 0,
        degree: 0,
        count: 3,
        radius: { 0: 50 },
        children: {
          fill: '#3276FF',
          pathScale: 'rand(0.5, 1)',
          radius: 'rand(12, 15)',
          swirlSize: 'rand(10, 15)',
          swirlFrequency: 'rand(2, 4)',
          direction: [1, -1],
          duration: `rand(${1 * 400}, ${2 * 400})`,
          delay: 'rand(0, 75)',
          easing: 'quad.out',
          isSwirl: true,
          isForce3d: true
        }
      }
      // mo: new mojs.Shape({
      //   shape: 'circle'
      //   // isShowStart: false
      // })
    }
  },
  methods: {
    handler(e) {
      const burst = new mojs.Burst({
        left: 0,
        top: 0,
        radius: { 4: 19 },
        angle: 45,
        children: {
          shape: 'line',
          radius: 3,
          scale: 1,
          stroke: '#FD7932',
          strokeDasharray: '100%',
          strokeDashoffset: { '-100%': '100%' },
          duration: 400,
          easing: 'quad.out'
        }
      })
      burst.tune({ x: e.pageX, y: e.pageY }).replay()
    }
  }
}
</script>
<style lang="scss" scoped>
#triangle {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>