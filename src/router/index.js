import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from '../views/Home.vue'
import Layout from '@/layout'
// const fullCalendar = () => import(/* webpackChunkName: "login_home_welcome" */ './components/fullCalendar.vue')

import afterSalesCenterRouter from './modules/afterSalesCenterRouter'
import myCollectionRouter from './modules/myCollectionRouter'
import myNeedsRouter from './modules/myNeedsRouter'


export const constantRoutes = [{
    path: '/',
    redirect: '/home',
    hidden: true
  },
  {
    path: '/home',
    component: Home,
    redirect: '/homePage',
    name: 'home',
    children: [{
        path: '/homePage',
        component: () => import('@/views/homePage'),
        name: 'homePage',
      },
      {
        path: 'companyIntroduction',
        component: resolve => require(['@/views/companyIntroduction'], resolve),
        name: 'companyIntroduction',
        meta: {
          title: '公司介绍'
        }
      },
      {
        path: 'partner',
        component: () => import('@/views/partner'),
        name: 'partner',
        meta: {
          title: '合作伙伴'
        }
      },
      {
        path: 'consult/marketing',
        component: () => import('@/views/consult/marketing'),
        name: 'marketing',
        meta: {
          title: '营销信息'
        }
      },
      {
        path: 'consult/industry',
        component: () => import('@/views/consult/industry'),
        name: 'industry',
        meta: {
          title: '行业动态'
        }
      },
      {
        path: 'consult/policy',
        component: () => import('@/views/consult/policy'),
        name: 'policy',
        meta: {
          title: '政策法规'
        }
      },
      {
        path: 'consult/price',
        component: () => import('@/views/consult/price'),
        name: 'price',
        meta: {
          title: '价格趋势'
        }
      },
      {
        path: 'consult/pipeFitting',
        component: () => import('@/views/consult/pipeFitting'),
        name: 'pipeFitting',
        meta: {
          title: '铸管/管件'
        }
      },
      {
        path: 'knowledge/case',
        component: () => import('@/views/knowledge/case'),
        name: 'case',
        meta: {
          title: '成功案列'
        }
      },
      {
        path: 'knowledge/industryKnow',
        component: () => import('@/views/knowledge/industryKnow'),
        name: 'industryKnow',
        meta: {
          title: '行业知识'
        }
      },
      {
        path: 'knowledge/issue',
        component: () => import('@/views/knowledge/issue'),
        name: 'issue',
        meta: {
          title: '常见问题'
        }
      },
      {
        path: 'knowledge/expert',
        component: () => import('@/views/knowledge/expert'),
        name: 'expert',
        meta: {
          title: '专家专栏'
        }
      },
      {
        path: 'purchase/demand',
        component: () => import('@/views/purchase/demand'),
        name: 'demand',
        meta: {
          title: '需求列表'
        }
      },
      {
        path: 'purchase/bidWinner',
        component: () => import('@/views/purchase/bidWinner'),
        name: 'bidWinner',
        meta: {
          title: '中标公示'
        }
      },
      {
        path: '/list',
        component: () => import('@/views/goods/list'),
        name: 'list',
        meta: {
          title: '产品列表'
        }
      },
      {
        path: '/detail/:product_id',
        component: () => import('@/views/goods/detail'),
        name: 'detail',
        meta: {
          title: '产品详情'
        }
      },
    ]
  },



  {
    path: '/login',
    component: () => import('@/views/login'),
    name: 'login',
    meta: {
      title: '用户登录'
    }
  },
  {
    path: '/register',
    component: () => import('@/views/register'),
    name: 'register',
  },
  //forgetPassword
  {
    path: '/forgetPassword',
    component: () => import('@/views/forgetPassword'),
    name: 'forgetPassword',
    meta: {
      title: '找回密码' // or you can only set roles in sub nav
    }
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  }

]

/**
//异步挂载的路由
//动态需要根据权限加载的路由表 
//meta标签来标示改页面能访问的权限有哪些
 */
export const asyncRoutes = [{
    path: '/user',
    component: Layout,
    redirect: '/user/information',
    children: [{
      path: 'information',
      component: () => import( /* webpackChunkName: 'User' */ '@/views/user/information/index'),
      name: 'information',
      meta: {
        title: '我的信息',
        icon: 'el-icon-s-order',
        noCache: true,
        roles: ['admin'],
        affix: true
      }
    }]
  },
  {
    path: '/user/personalData',
    component: Layout,
    redirect: '/user/personalData/basicData',
    alwaysShow: true, // will always show the root menu
    name: 'personalData',
    meta: {
      title: '个人资料',
      icon: 'el-icon-user-solid',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [{
        path: 'basicData',
        component: () => import( /* webpackChunkName: 'User' */ '@/views/user/personalData/basicData'),
        name: 'basicData',
        meta: {
          title: '基本资料',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'commonAddress',
        component: () => import( /* webpackChunkName: 'User' */ '@/views/user/personalData/commonAddress'),
        name: 'commonAddress',
        meta: {
          title: '常用地址',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      }

    ]
  },
  {
    path: '/user/orderCenter',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import( /* webpackChunkName: 'User' */ '@/views/user/orderCenter/index'),
      name: 'orderCenter',
      meta: {
        title: '订单中心',
        icon: 'el-icon-s-order',
        noCache: true,
        roles: ['admin']
      }
    }]
  },
  {
    path: '/user/purchaseQuotation',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import( /* webpackChunkName: 'Purchase' */ '@/views/user/purchaseQuotation/index'),
      name: 'purchaseQuotation',
      meta: {
        title: '采购报价',
        icon: 'el-icon-goods',
        noCache: true,
        roles: ['admin']
      }
    }]
  },

  afterSalesCenterRouter,
  myCollectionRouter,
  myNeedsRouter,

  {
    path: '/user/bidWinningResults',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import( /* webpackChunkName: 'Purchase' */ '@/views/user/bidWinningResults/index'),
      name: 'bidWinningResults',
      meta: {
        title: '中标结果',
        icon: 'el-icon-bangzhu',
        noCache: true,
        roles: ['admin']
      }
    }]
  },
  {
    path: '/user/validContract',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import( /* webpackChunkName: 'Purchase' */ '@/views/user/validContract/index'),
      name: 'validContract',
      meta: {
        title: '有效合同',
        icon: 'form',
        noCache: true,
        roles: ['admin']
      }
    }]
  },
  {
    path: '/user/electronicWarranty',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import( /* webpackChunkName: 'Purchase' */ '@/views/user/electronicWarranty/index'),
      name: 'electronicWarranty',
      meta: {
        title: '电子质保书',
        icon: 'icon',
        noCache: true,
        roles: ['admin']
      }
    }]
  },
  {
    path: '/user/transportationPlan',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import( /* webpackChunkName: 'Purchase' */ '@/views/user/transportationPlan/index'),
      name: 'transportationPlan',
      meta: {
        title: '承运计划',
        icon: 'el-icon-date',
        noCache: true,
        roles: ['admin']
      }
    }]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
  // 404 页面一定要最后加载
]

// 没有权限的
//实例化vue的时候只挂载constantRouter
const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// // reset router目前没有用到  Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
