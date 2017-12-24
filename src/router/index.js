import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import qd2 from '@/qd2/qd2'
import qd3 from '@/qd3/qd3'
import qd4 from '@/qd4/qd4'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/qd2',
    	component: qd2
    },
    {
    	path: '/qd3',
    	component: qd3
    },
    {
      path: '/qd4',
      component: qd4
    }
  ]
})
