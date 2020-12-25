import { uniqueId, flatten } from 'lodash'
import header from './header'
import slider from './slider'
/**
 * @description 给菜单数据补充上 path 字段
 * @description FIX:左侧菜单栏列出所有菜单，在点击二级菜单后，上级菜单会折叠起来
 * @param {Array} menu 原始的菜单数据
 */
function supplementPath(menu) {
  return menu.map(e => ({
    ...e,
    path: e.path || uniqueId('w-menu-empty-'),
    ...(e.children
      ? {
        children: supplementPath(e.children)
      }
      : {})
  }))
}
export const menuHeader = supplementPath(header)
export const menuAside = supplementPath(flatten(slider.map(e => e.children)))
