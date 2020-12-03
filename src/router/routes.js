/**
 * TODO 提醒修改事项
 * TODO middleware？EventEmit? 策略模式？
 */
import { frameOut, errorPage } from './layout-router/sys.router'
import routerFlow from './layout-router/router.flow'
console.time('mountRouter')

// 需要显示菜单的
const frameInRoutes = routerFlow.flow()
// 导出需要显示菜单的
export { frameInRoutes }
console.timeEnd('mountRouter')

// 重新组织后导出
export default [...frameInRoutes, ...frameOut, ...errorPage]
