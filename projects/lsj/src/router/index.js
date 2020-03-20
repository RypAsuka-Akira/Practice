import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import information from '@/components/information'
import identity from '@/components/identity'
import process from '@/components/process'
import history from '@/components/history'
import suggestion from '@/components/suggestion'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/info',
      name: 'information',
      component: information,
      children: [{
        path: 'identity',
        name: 'identity',
        component: identity
      },
      {
        path: 'process',
        name: 'process',
        component: process
      },
      {
        path: 'history',
        name: 'history',
        component: history
      },
      {
        path: 'suggestion',
        name: 'suggestion',
        component: suggestion
      }]
    }
  ]
})
