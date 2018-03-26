import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
	{
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
