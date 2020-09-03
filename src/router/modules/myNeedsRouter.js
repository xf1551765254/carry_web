/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'



const myNeedsRouter = {
  path: '/user/myNeeds',
  component: Layout,
  redirect: '/user/myNeeds/product',
  alwaysShow: true, // will always show the root menu
  name: 'myNeeds',
  meta: {
    title: '我的需求',
    icon: 'el-icon-s-opportunity',
    roles: ['admin', 'editor'] // you can set roles in root nav
  },
  children: [{
      path: 'visitDemand',
      component: () => import( /* webpackChunkName: 'MyNeeds' */ '@/views/user/myNeeds/visitDemand'),
      name: 'visitDemand',
      meta: {
        title: '来厂需求',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    },
    {
      path: 'feedback',
      component: () => import( /* webpackChunkName: 'MyNeeds' */ '@/views/user/myNeeds/feedback'),
      name: 'feedback',
      meta: {
        title: '年度反馈',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    },
    {
      path: 'service',
      component: () => import( /* webpackChunkName: 'MyNeeds' */ '@/views/user/myNeeds/service'),
      name: 'service',
      meta: {
        title: '服务展示',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    },
    {
      path: 'preSalePush',
      component: () => import( /* webpackChunkName: 'MyNeeds' */ '@/views/user/myNeeds/preSalePush'),
      name: 'preSalePush',
      meta: {
        title: '售前推送',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    }
  ]
}

export default myNeedsRouter
