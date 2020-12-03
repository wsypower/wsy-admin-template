import { frameIn } from './frameIn.router'
import { isMatchSuffix, routerError } from '../utils/utils'
/**
 * @description
 * 收集整理模块内的router
 * @author weiyafei
 * @date 2020-12-03
 * @class RouterFlow
 */
export default new (class RouterFlow {
  constructor() {
    // 主框架内,通畅需要验证权限的路由
    this.frameInRouter = frameIn
    // 模块路由
    this.modulesRouter = []
    // 处理后的路由
    this.disposeModulesRouter = []
    // 待导出路由
    this.router = []
    // 切分
    this.chunkModulesRouterKeys = null
  }

  flow() {
    // 收集Modules内路由并且以文件名为key
    return (
      this.collectModulesAddKey()
        // 处理路由
        .disposeModules()
        // 合并
        .concat()
        // 组合
        .group()
        // 导出
        .export()
    )
  }

  /**
   * @description
   * @author weiyafei
   * @date 2020-12-03
   * @param {Function} routerContext webpack 上下文收集器
   */
  collectModulesAddKey() {
    const routerContext = require.context('../modules', true, /\.js$/)
    this.routerModules = routerContext.keys().reduce((modules, route) => {
      // 获取路由标识符
      const routerKey = isMatchSuffix(route)
      const routerModules = routerContext(route)
      // 如果文件为导出为空对象跳过
      if (!Object.keys(routerModules).length) {
        // 错误提示
        routerError(route)
        return modules
      }
      // 兼容 import export 和 require module.export 两种规范
      modules[routerKey] = routerModules.default || routerModules
      return modules
    }, {})
    return this
  }

  /**
   * @description
   * 处理路由
   * @author weiyafei
   * @date 2020-12-03
   * @returns
   */
  disposeModules() {
    // 切分流程
    this.chunkModules()
    return this
  }

  concat() {
    this.disposeModulesRouter = this.frameInRouter.reduce(
      (frameInRouter, router) => {
        // 只需要匹配 modulesKeys[0] 内的router
        const key = this.chunkModulesRouterKeys[0].findIndex(
          k => k === router.name
        )
        if (~key) {
          router.children = [
            ...(Array.isArray(router.children) ? router.children : []),
            ...this.routerModules[this.chunkModulesRouterKeys[0][key]]
          ]
          frameInRouter.push(router)
        }
        return frameInRouter
        // reduce 第一个参数放frameInRouterModulesKey[1],混入主框架内
      },
      [].concat(
        ...this.chunkModulesRouterKeys[1].map(k => this.routerModules[k])
      )
    )
    return this
  }

  // 将路由组合在一起
  group() {
    this.router = [...this.disposeModulesRouter]
    return this
  }

  /**
   * @description
   * 将Modules收集来的router做切分
   * frameIn中有同名name的切入第一数组,其余放入第二数组
   * @author weiyafei
   * @date 2020-12-03
   */
  chunkModules() {
    this.chunkModulesRouterKeys = Object.keys(this.routerModules).reduce(
      (modulesKeys, key) => {
        const FrameRouterIncludes = this.frameInRouter.findIndex(
          r => r.name === key
        )
        modulesKeys[~FrameRouterIncludes ? 0 : 1].push(key)
        return modulesKeys
      },
      [[], []]
    )
    return this
  }

  export() {
    return this.router
  }
})()
