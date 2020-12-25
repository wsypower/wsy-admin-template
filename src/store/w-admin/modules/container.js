/**
 * 可以在这个网址选取一类动画
 * @see https://webcodefarmer.github.io/vue-transition.css/dist/index.html#/scaleDownToUp
 *
 * 推荐 left: 'rotate-glue-left-to-right'
 *     right: 'rotate-glue-right-to-left'
 */
const ANIMATION_ARR = {
  left: 'rotate-glue-left-to-right', // rotate-sides
  right: 'rotate-glue-right-to-left'
}
const LAYOUT_CONTAINER = {
  basic: 'w-layoutContainer',
  full: 'w-container'
}
export default {
  namespaced: true,
  state: {
    // 是否开启页面过度动画
    transition: 'rotate-sides',
    // 选用哪个基础组件容器
    fullLayout: []
  },
  mutations: {
    // 切换container组件的动画朝向
    setAnimation(state, direction) {
      state.transition = direction
    },
    // 收集需要full-container容器
    setFullLayout(state, layout) {
      state.fullLayout = layout
    }
  },
  actions: {
    /**
     * @description 设置动画状态
     * @param {Object} context
     * @param {String} path 获取路径
     */
    changeAnimation({ commit }, { oldIndex, newIndex }) {
      return new Promise((resolve, reject) => {
        const direction =
          oldIndex < newIndex ? 'right' : oldIndex === newIndex ? '' : 'left'
        const animate = ANIMATION_ARR[direction]
        commit('setAnimation', animate)
        resolve()
      }).catch(err => {
        throw new Error(err)
      })
    },
    /**
     * @description
     * 切换容器
     * @author weiyafei
     * @date 2020-12-09
     */
    initViewLayout({ commit }, frameInRoutes) {
      const fullRouter = frameInRoutes
        .filter(router => router.meta && router.meta.full)
        .map(item => item.path)
      commit('setFullLayout', fullRouter)
    }
  }
}
