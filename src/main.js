// The Vue build version to load with the `import` command
// https://vuejs.org/v2/examples/firebase.html
// https://jsfiddle.net/chrisvfritz/pyLbpzzx/?utm_source=website&utm_medium=embed&utm_campaign=pyLbpzzx
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import 'materialize-css/dist/css/materialize.min.css'
// import 'jquery/dist/jquery.min.js'
// import 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/fonts/roboto/Roboto-Regular.woff'
import Index from '@/components/Index'
import Contato from '@/components/Contato'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
// import { router } from './routes'

Vue.use(Router)

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

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
