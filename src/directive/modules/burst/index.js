/* eslint-disable */
import Burst from './Burst'
export default {
  bind(el, binding) {
    // 采集标识符
    const {
      arg,
      value,
      observeOption = { option: 'event', event: 'click' }
    } = binding
    const burst = new Burst(el, arg, value, observeOption)
    burst.init()
  }
}
