// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import 'materialize-css/dist/css/materialize.min.css'
import Index from '@/components/Index'
import Contato from '@/components/Contato'
import Hello from '@/components/Hello'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
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

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
