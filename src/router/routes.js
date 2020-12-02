import { routerError } from './utils/error'
import { isMatchSuffix } from './utils/utils'
import { frameOut, errorPage } from './layout-router/sys.router'
import { frameIn } from './layout-router/frameIn.router'

// ##################################################################### //
// ################################ 收集路由 ############################### //
// ##################################################################### //

/**
 * 收集modules中的路由
 */
const routerContext = require.context('./modules', true, /\.js$/)
const frameInRouterModules = routerContext.keys().reduce((children, route) => {
  // 获取路由标识符
  const routerKey = isMatchSuffix(route)
  const routerModules = routerContext(route)
  // 如果文件为导出为空对象跳过
  if (!Object.keys(routerModules).length) {
    // 书写错误提示（阅读源码可跳过）
    routerError(route)
    return children
  }
  // 兼容 import export 和 require module.export 两种规范
  children[routerKey] = routerModules.default || routerModules
  return children
}, {})

// ##################################################################### //
// ################################ 路由分组 ############################### //
// ##################################################################### //
/**
 * @description
 * 将Modules收集来的router做切分,frameIn中有同名name的切入第一数组,其余放入第二数组
 * @author wsy
 * @date 2020-12-02  18:45:34
 * @returns {Array} 二维数组
 */
const frameInRouterModulesKey = Object.keys(frameInRouterModules).reduce(
  (modulesKey, key) => {
    const includesFrameRouter = frameIn.findIndex(r => r.name === key)
    modulesKey[~includesFrameRouter ? 0 : 1].push(key)
    return modulesKey
  },
  [[], []]
)

// ##################################################################### //
// ################################ 处理路由 ############################### //
// ##################################################################### //
/**
 * @description
 * @author wsy
 * @date 2020-12-02  18:45:40
 * @returns {Array} 将name和key相同的挂载入主路由对应children中，不同的作为主路由混入
 */
const frameInCollectModules = frameIn.reduce((frameInRouter, router) => {
  // 只需要匹配 frameInRouterModulesKey[0] 内的router
  const key = frameInRouterModulesKey[0].findIndex(k => k === router.name)
  if (~key) {
    router.children = [
      ...(Array.isArray(router.children) ? router.children : []),
      ...frameInRouterModules[frameInRouterModulesKey[0][key]]
    ]
    frameInRouter.push(router)
  }
  return frameInRouter
  // reduce 第一个参数放frameInRouterModulesKey[1],混入主框架内
}, [].concat(...frameInRouterModulesKey[1].map(k => frameInRouterModules[k])))

// ##################################################################### //
// ################################ 导出路由 ############################### //
// ##################################################################### //
// 导出需要显示菜单的
export const frameInRoutes = frameInCollectModules

// 重新组织后导出
export default [...frameInCollectModules, ...frameOut, ...errorPage]
