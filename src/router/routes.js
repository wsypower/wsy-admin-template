/**
 * TODO 提醒事项
 * TODO 这里肯定会有很多很多的逻辑，就比如权限自动添加之类的，需要怎么抽离....脑壳大
 * TODO middleware？EventEmit? 策略模式？
 */

import {
  collectRouter,
  chunkModulesRouter,
  frameInConcatModules
} from './utils/utils'
import { frameOut, errorPage } from './layout-router/sys.router'
import { frameIn } from './layout-router/frameIn.router'

console.time('mountRouter')
// 收集modules下的路由
const routerModules = collectRouter(require.context('./modules', true, /\.js$/))

// 按frameIn内路由name值切分routerModules,需要挂载的放入二维数组第一位，其余放入第二位
const chunkModulesRouterResult = chunkModulesRouter(routerModules, frameIn)

// 将name和key值一致的挂载到frameIn内，其余当主路由混入
// 导出需要显示菜单的
export const frameInRoutes = frameInConcatModules(
  chunkModulesRouterResult,
  routerModules,
  frameIn
)
console.timeEnd('mountRouter')

// 重新组织后导出
export default [...frameInRoutes, ...frameOut, ...errorPage]
