import Vue from 'vue'
import Router from 'vue-router'
import Contato from '@/components/Contato'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/contato',
      name: 'Contato',
      component: Contato
    }
  ]
})
