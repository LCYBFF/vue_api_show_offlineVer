import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
  	path: '/',
    component: Layout,
    children: [
    	{
    		path: '',
    		component: () => import('@/views/index'),
        meta: { title: '首页' },
    	}
    ]
  },
  {
  	path: '/docs',
    component: Layout,
    children: [
	    {
				path: '',
				component: () => import('@/views/docs'),
		    meta: { title: 'API接口一览' }
			},
    	{
				path: 'api/:id',
				component: () => import('@/views/api'),
		    meta: { title: 'API详情' }
			}
		]
  },
  

  {
    path: '/404',
    component: () => import('@/views/404')
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404' }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
