import router from "./router";
import store from "./store";
import {
  Message
} from "element-ui";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import {
  getToken
} from "@/utils/auth"; // get token from cookie
import getPageTitle from "@/utils/get-page-title";

NProgress.configure({
  showSpinner: false
}); // NProgress Configuration

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();

  // set page title
  document.title = getPageTitle(to.meta.title);

  const hasToken = getToken()

  if (!store.state.user.userId) {
    store.commit('user/SET_USERID', '1234567890')
    if (hasToken) {
      // 登录
      try {
        const accessRoutes = await store.dispatch('permission/generateRoutes', ['admin'])
        router.addRoutes(accessRoutes)
        next({
          ...to,
          replace: true
        })
      } catch (erro) {
        Message.error(error || '操作有误')
        next(`/login?redirect=${to.path}`)
        NProgress.done()
      }
    } else {
      // 没有登录
      const reg = /\/user\/[a-zA-Z]+\/[a-zA-Z]+/
      if (reg.test(to.path)) {
        router.addRoutes([{
          path: '*',
          redirect: '/404',
          hidden: true
        }])
        next({
          path: '/login'
        })
        NProgress.done()
      } else {
        router.addRoutes([{
          path: '*',
          redirect: '/404',
          hidden: true
        }])
        next({
          ...to,
          replace: true
        })
      }
    }
  } else {
    next()
  }
});
router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
