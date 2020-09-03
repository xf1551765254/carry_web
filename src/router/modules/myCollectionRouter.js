/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'



const myCollectionRouter = {
  path: '/user/myCollection',
  component: Layout,
  redirect: '/user/myCollection/product',
  alwaysShow: true, // will always show the root menu
  name: 'myCollection',
  meta: {
    title: '我的收藏',
    icon: 'el-icon-star-on',
    roles: ['admin', 'editor'] // you can set roles in root nav
  },
  children: [{
      path: 'product',
      component: () => import( /* webpackChunkName: 'MyCollection' */ '@/views/user/myCollection/product'),
      name: 'product',
      meta: {
        title: '产品',
        roles: ['admin']
      }
    },
    {
      path: 'industryTrends',
      component: () => import( /* webpackChunkName: 'MyCollection' */ '@/views/user/myCollection/industryTrends'),
      name: 'industryTrends',
      meta: {
        title: '行业动态',
        roles: ['admin']
      }
    },
    {
      path: 'regulations',
      component: () => import( /* webpackChunkName: 'MyCollection' */ '@/views/user/myCollection/regulations'),
      name: 'regulations',
      meta: {
        title: '政策法规',
        roles: ['admin']
      }
    },
    {
      path: 'stories',
      component: () => import( /* webpackChunkName: 'MyCollection' */ '@/views/user/myCollection/stories'),
      name: 'stories',
      meta: {
        title: '成功案例',
        roles: ['admin']
      }
    },
    {
      path: 'knowledge',
      component: () => import( /* webpackChunkName: 'MyCollection' */ '@/views/user/myCollection/knowledge'),
      name: 'knowledge',
      meta: {
        title: '行业知识',
        roles: ['admin']
      }
    }
  ]
}

export default myCollectionRouter
