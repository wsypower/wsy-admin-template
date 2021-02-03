import store from "@/store";
import util from "@/libs/util";
import { menuHeader, menuAside } from "@/menu";

/**
 * @description
 * 深度平整化权限数据
 * @author wsy
 * @date 2021-01-29  15:57:11
 */
const deep = router => {
  return router.reduce((acc, item) => {
    return acc.concat(
      item["resourceList"]
        ? [item.code, ...deep(item["resourceList"])]
        : [item.code]
    );
  }, []);
};
/**
 * @description
 * 深度平整化menu
 * @author wsy
 * @date 2021-01-29  17:00:39
 */
const deepMenu = (menu, roleRouterDeep) => {
  return menu.reduce((acc, item) => {
    return acc.concat(
      item.children
        ? deepMenu(item.children, roleRouterDeep)
        : item.code === undefined
        ? [item.path]
        : roleRouterDeep.includes(item.code)
        ? [item.path]
        : []
    );
  }, []);
};

export default {
  beforeRouteEnter(to, from, next) {
    const roleRouter = store.getters["w-admin/user/roleRouter"];
    next(instance => {
      // 在没有权限的情况下条转入登录
      if (!roleRouter) {
        return instance.$router.replace({ name: "login" });
      } else if (roleRouter.length == 0) {
        // 没有一级权限的时候条转入404
        return instance.$router.replace({ name: "404" });
      }

      // 深度平整化router
      const roleRouterDeep = deep(roleRouter);
      // 得到第一次需要跳转的路由path
      const menu = deepMenu(
        menuHeader.filter(item =>
          item.code === undefined ? true : roleRouterDeep.includes(item.code)
        ),
        roleRouterDeep
      );
      // 重定向从哪来
      const redirectedFrom = to.redirectedFrom;

      const currentPage = menu.filter(item => {
        return item.includes(redirectedFrom);
      });
      if (currentPage.length) {
        instance.$router.replace(currentPage[0]);
        return;
      }

      // 在重定向页面下没有子路由的情况下跳转入404
      instance.$router.replace({ name: "404" });
      // 极端情况一点权限都没有,避免陷入404死循环
      // 删除cookie
      util.cookies.remove("token");
      util.cookies.remove("uuid");
      util.cookies.remove("expires");
      // 清空tags
      store.dispatch("w-admin/page/closeAllPage", {}, { root: true });
      // 清空 vuex 用户信息
      store.dispatch("w-admin/user/set", {}, { root: true });
      return;
    });
  },
  render: h => h()
};
