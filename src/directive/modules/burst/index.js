/* eslint-disable */
import Burst from './Burst'
export default {
  bind(el, binding) {
    // 采集参数
    const { arg, value, modifiers } = binding
    const burst = new Burst(el, arg, value, modifiers)
    burst.init()
  }
}
