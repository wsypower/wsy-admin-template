import util from '@/libs/util'

/**
 * @description
 * @author wsy
 * @date 2020-12-02  14:15:10
 */
const routerError = route => {
  if (process.env.NODE_ENV !== 'development') return
  util.log.capsule('router模块', 'Warning', 'warning')
  util.log.warning('---------------------------------------')
  util.log.warning(
    `router/modules目录:${route.replace('./', '')} 导出对象为空`
  )
  util.log.warning('---------------------------------------')
}

export { routerError }
