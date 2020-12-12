import EventEmitter from './EventEmitterModel'
/**
 * @description
 * Observe模块提供基础vue指令监测方法
 * @author wsy
 * @date 2020-12-12  18: 01: 42
 * @param    {Element}   el - 指令所绑定的元素，可以用来直接操作 DOM
 * @param    {Object}    binding - 一个对象，包含以下 property
 * @property {Object}    value - 指令的绑定值
 * @property {String}    arg - 传给指令的参数
 * @property {Object}    modifiers - 一个包含修饰符的对象
 * @module Observe
 */

export default class ObserveEmitter extends EventEmitter {
  constructor(el, { arg, modifiers }) {
    super()
    this.el = el
    // 多种效果的时候使用
    this.arg = arg
    this.modifiers = this.checkModifiers(modifiers)
    this.observe()
  }

  /**
   * @description
   * 初始化开始监听
   * @author wsy
   * @date 2020-12-12  21:09:40
   * @param {Object} fn your introduction
   */
  init(fn) {
    const { observe, listen } = this.modifiers
    this.emit(observe, listen, fn)
  }

  /**
   * @description
   * 判断是监听dom还是监听事件
   * @author wsy
   * @date 2020-12-12  21:09:23
   */
  observe() {
    const observeMo = this.modifiers.observe
    this.addListener(
      observeMo,
      observeMo === 'event' ? this.observeEvent : this.observeAttribute
    )
  }

  /**
   * @description
   * 监听事件
   * @author wsy
   * @date 2020-12-12  21:08:39
   * @param {Function} fn 执行逻辑
   */
  observeEvent(listenEvent, fn) {
    this.el.addEventListener(listenEvent[0], () => {
      fn.apply(this)
    })
  }

  /**
   * @description
   * MutationObserver 监听dom
   * @author wsy
   * @date 2020-12-12  21:08:39
   * @param {Function} fn 执行逻辑
   */
  observeAttribute(listenEvent, fn) {
    const observe = new window.MutationObserver(() => {
      fn.apply(this)
    })
    observe.observe(this.el, {
      attributeFilter: listenEvent,
      subtree: true
    })
  }

  /**
   * @description
   * 获取指令值
   * 指令分  - [observe,event]
   * 指令第一个值是选取什么方法监测 observe | event
   * 指令第二个值是监听什么方法 分事件( 如:[click] )和属性( 如:[class] )
   * 如  event.click
   *     如果是属性可以有多个 就是监听多个属性
   *     observe.class.list.style
   * @author wsy
   * @date 2020-12-12  18:09:54
   * @param {Object} modifiers
   */
  checkModifiers(modifiers) {
    const modifiersKeys = Object.keys(modifiers)
    let [observe = 'event', ...listen] = modifiersKeys
    // 因为默认值的关系修正一次第二个参数未传的情况下的值
    if (!listen.length) {
      listen = observe === 'observe' ? ['class'] : ['click']
    }
    return {
      observe,
      listen
    }
  }
}
