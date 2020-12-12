const path = require('path')
const files = require.context('./modules', true, /\.js$/)

const vueDirective = {}
files.keys().forEach(key => {
  if (~path.basename(key).search('index')) {
    const directiveKey = path.dirname(key).replace('./', '')
    vueDirective[directiveKey] = files(key).default
    return vueDirective
  }
})
// TODO Vue-directive的value,可以传递对象,但是数据共享---动态指令的方式是选用 binding - modifiers
export default {
  install: function(Vue, options) {
    Object.keys(vueDirective).forEach(name => {
      Vue.directive(name, vueDirective[name])
    })
  }
}
