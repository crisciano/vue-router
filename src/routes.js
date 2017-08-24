import Router from 'vue-router'
import Index from '@/components/Index'
import Contato from '@/components/Contato'
import Hello from '@/components/Hello'
import Login from '@/components/Login'

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/home',
      component: Index
    },
    {
      path: '/contato',
      component: Contato
    },
    {
      path: '/hello',
      component: Hello
    }
  ]
})
