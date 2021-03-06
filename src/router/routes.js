import {
  frameOut,
  errorPage,
  functionPage,
  features
} from "./sys-router/sys.router";
import { frameIn } from "./sys-router/frameIn.router";
// 需要显示菜单的
const frameInRoutes = frameIn;
// 导出需要显示菜单的
export { frameInRoutes };

// 重新组织后导出
export default [...frameInRoutes, ...frameOut, ...errorPage];
