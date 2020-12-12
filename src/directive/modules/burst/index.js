/* eslint-disable */
import Burst from './Burst'
export default {
  bind(el, binding) {
    console.log(binding)
    // 采集参数
    const burst = new Burst(el, binding)
    burst.init()
  }
}
