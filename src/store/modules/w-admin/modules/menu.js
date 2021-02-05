// 设置文件
import setting from '@/setting.js'

/**
 * @description
 * 收集menu有效path
 * @author wsy
 * @date 2020-12-10  20:07:54
 * @param {ArrAy}  header/aside
 */
const collectPath = menu => {
  return menu
    .reduce((collect, router) => {
      router.path && !router.hide && collect.push(router.path)
      return collect.concat(
        Array.isArray(router.children) ? collectPath(router.children) : []
      )
    }, [])
    .filter(
      router => !(/^w-menu-empty-\d+$/.test(router) || router === undefined)
    )
}

export default {
  namespaced: true,
  state: {
    // 顶栏菜单
    header: [],
    // 侧栏菜单
    aside: [],
    // 侧边栏收缩
    asideCollapse: setting.menu.asideCollapse,
    // 侧边栏折叠动画
    asideTransition: setting.menu.asideTransition
  },
  getters: {
    deepMenuAside(state) {
      return collectPath(state.aside)
    },
    deepMenuHeader(state) {
      return collectPath(state.header)
    }
  },
  actions: {
    /**
     * 设置侧边栏展开或者收缩
     * @param {Object} context
     * @param {Boolean} collapse is collapse
     */
    async asideCollapseSet({ state, dispatch }, collapse) {
      // store 赋值
      state.asideCollapse = collapse
      // 持久化
      await dispatch(
        'w-admin/db/set',
        {
          dbName: 'sys',
          path: 'menu.asideCollapse',
          value: state.asideCollapse,
          user: true
        },
        { root: true }
      )
    },
    /**
     * 切换侧边栏展开和收缩
     * @param {Object} context
     */
    async asideCollapseToggle({ state, dispatch }) {
      // store 赋值
      state.asideCollapse = !state.asideCollapse
      // 持久化
      await dispatch(
        'w-admin/db/set',
        {
          dbName: 'sys',
          path: 'menu.asideCollapse',
          value: state.asideCollapse,
          user: true
        },
        { root: true }
      )
    },
    /**
     * 设置侧边栏折叠动画
     * @param {Object} context
     * @param {Boolean} transition is transition
     */
    async asideTransitionSet({ state, dispatch }, transition) {
      // store 赋值
      state.asideTransition = transition
      // 持久化
      await dispatch(
        'w-admin/db/set',
        {
          dbName: 'sys',
          path: 'menu.asideTransition',
          value: state.asideTransition,
          user: true
        },
        { root: true }
      )
    },
    /**
     * 切换侧边栏折叠动画
     * @param {Object} context
     */
    async asideTransitionToggle({ state, dispatch }) {
      // store 赋值
      state.asideTransition = !state.asideTransition
      // 持久化
      await dispatch(
        'w-admin/db/set',
        {
          dbName: 'sys',
          path: 'menu.asideTransition',
          value: state.asideTransition,
          user: true
        },
        { root: true }
      )
    },
    /**
     * 持久化数据加载侧边栏设置
     * @param {Object} context
     */
    async asideLoad({ state, dispatch }) {
      // store 赋值
      const menu = await dispatch(
        'w-admin/db/get',
        {
          dbName: 'sys',
          path: 'menu',
          defaultValue: setting.menu,
          user: true
        },
        { root: true }
      )
      state.asideCollapse =
        menu.asideCollapse !== undefined
          ? menu.asideCollapse
          : setting.menu.asideCollapse
      state.asideTransition =
        menu.asideTransition !== undefined
          ? menu.asideTransition
          : setting.menu.asideTransition
    }
  },
  mutations: {
    /**
     * @description 设置顶栏菜单
     * @param {Object} state state
     * @param {Array} menu menu setting
     */
    headerSet(state, menu) {
      // store 赋值
      state.header = menu
    },
    /**
     * @description 设置侧边栏菜单
     * @param {Object} state state
     * @param {Array} menu menu setting
     */
    asideSet(state, menu) {
      // store 赋值
      state.aside = menu
    }
  }
}
