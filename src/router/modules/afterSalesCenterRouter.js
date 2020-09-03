/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const afterSalesCenterRouter = {
  path: '/user/afterSalesCenter',
  component: Layout,
  redirect: '/user/afterSalesCenter/install',
  alwaysShow: true, // will always show the root menu
  name: 'afterSalesCenter',
  meta: {
    title: '售后中心',
    icon: 'el-icon-s-operation',
    roles: ['admin', 'editor'] // you can set roles in root nav
  },
  children: [{
      path: 'install',
      component: () => import( /* webpackChunkName: 'AfterSalesCenter' */ '@/views/user/afterSalesCenter/install'),

      name: 'install',
      meta: {
        title: '申请安装',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    },
    {
      path: 'quality',
      component: () => import( /* webpackChunkName: 'AfterSalesCenter' */ '@/views/user/afterSalesCenter/quality'),
      name: 'quality',
      meta: {
        title: '质量异议',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    },
    {
      path: 'returnExchange',
      component: () => import( /* webpackChunkName: 'AfterSalesCenter' */ '@/views/user/afterSalesCenter/returnExchange'),
      name: 'returnExchange',
      meta: {
        title: '退换货',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    }

  ]
}

export default afterSalesCenterRouter
