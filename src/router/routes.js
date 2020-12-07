/**
 * TODO 提醒修改事项
 * TODO middleware？EventEmit? 策略模式？
 */
import { frameOut, errorPage } from './sys-router/sys.router'
import { frameIn } from './sys-router/frameIn.router'
import {
  collectRouter,
  chunkModulesRouter,
  frameInConcatModules
} from './utils/utils'

console.time('路由收集装载耗时')

// 收集modules的路由
const collectModule = collectRouter()
// 按需切分
const chunkModules = chunkModulesRouter(collectModule, frameIn)
// 挂载路由
const frameInModules = frameInConcatModules(
  chunkModules,
  collectModule,
  frameIn
)

// 需要显示菜单的
const frameInRoutes = frameInModules

// 导出需要显示菜单的
export { frameInRoutes }
console.timeEnd('路由收集装载耗时')

// 重新组织后导出
export default [...frameInRoutes, ...frameOut, ...errorPage]
