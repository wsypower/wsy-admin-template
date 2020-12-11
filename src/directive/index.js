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
export default {
  install: function(Vue, options) {
    Object.keys(vueDirective).forEach(name => {
      Vue.directive(name, vueDirective[name])
    })
  }
}
