/* eslint-disable */
import Burst from './Burst'
export default {
  bind(el, binding) {
    // 采集参数
    const burst = new Burst(el, binding)
    burst.init()
  }
}
