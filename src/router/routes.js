import { frameOut, errorPage } from './sys-router/sys.router'
import { frameIn } from './sys-router/frameIn.router'
import util from '@/libs/util.js'
import {
  collectRouter,
  chunkModulesRouter,
  frameInConcatModules
} from './utils/utils'
const start = window.performance.now()
const development = process.env.NODE_ENV !== 'production'

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
const consuming = window.performance.now() - start

// 提示耗时
development && util.log.warning(`路由收集装载耗时: ${consuming} ms`)

// 需要显示菜单的
const frameInRoutes = frameInModules

// 导出需要显示菜单的
export { frameInRoutes }
console.log(frameInRoutes)

// 重新组织后导出
export default [...frameInRoutes, ...frameOut, ...errorPage]
