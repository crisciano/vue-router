import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Contato from '@/components/Contato'
import Hello from '@/components/Hello'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Index',
      component: Index
    },
    {
      path: '/contato',
      name: 'Contato',
      component: Contato
    },
    {
      path: '/hello',
      name: 'Contato',
      component: Hello
    }
  ]
})
