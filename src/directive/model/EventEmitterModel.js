class EventEmitter {
  constructor() {
    this._maxListeners = 10
    this._events = Object.create(null)
  }

  // 向事件队列添加事件
  // prepend为true表示向事件队列头部添加事件
  addListener(type, listener, prepend) {
    if (!this._events) {
      this._events = Object.create(null)
    }
    if (this._events[type]) {
      if (prepend) {
        this._events[type].unshift(listener)
      } else {
        this._events[type].push(listener)
      }
    } else {
      this._events[type] = [listener]
    }
  }

  // 移除某个事件
  removeListener(type, listener) {
    if (Array.isArray(this._events[type])) {
      if (!listener) {
        delete this._events[type]
      } else {
        this._events[type] = this._events[type].filter(
          e => e !== listener && e.origin !== listener
        )
      }
    }
  }

  // 向事件队列添加事件，只执行一次
  once(type, listener) {
    const only = (...args) => {
      listener.apply(this, args)
      this.removeListener(type, listener)
    }
    only.origin = listener
    this.addListener(type, only)
  }

  // 执行某类事件
  emit(type, ...args) {
    if (Array.isArray(this._events[type])) {
      this._events[type].forEach(fn => {
        fn.apply(this, args)
      })
    }
  }

  // 设置最大事件监听个数
  setMaxListeners(count) {
    this.maxListeners = count
  }
}

export default EventEmitter
