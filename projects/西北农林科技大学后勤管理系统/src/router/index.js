import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home'
import news from '../components/home/news'
import login from '../components/login/Login'
import sInfo from '../components/student/information'
import sIdentity from '../components/student/identity'
import sProcess from '../components/student/process'
import sHistory from '../components/student/history'
import sFindLost from '../components/student/findLost'
import sSuggestion from '../components/student/suggestion'
import tInfo from '../components/teacher/teacherInformation'
import tIdentity from '../components/teacher/teacherIdentity'
import tNews from '../components/teacher/teacherNews'
import tEdit from '../components/teacher/teacherEdit'
import tProcess from '../components/teacher/teacherProcess'
import tHistory from '../components/teacher/teacherHistory'
import tFindLost from '../components/teacher/teacherFindLost'
import tSuggestion from '../components/teacher/teacherSuggestion'
import wInfo from '../components/worker/workerInformation'
import wIdentity from '../components/worker/workerIdentity'
import wProcess from '../components/worker/workerProcess'
import wHistory from '../components/worker/workerHistory'
import page from '../components/Page5'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: page
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/sInfo',
      name: 'sInfo',
      component: sInfo,
      children: [
        {
          path: '/sInfo/identity',
          name: 'identity',
          component: sIdentity
        },
        {
          path: '/sInfo/process',
          name: 'process',
          component: sProcess
        },
        {
          path: '/sInfo/history',
          name: 'history',
          component: sHistory
        },
        {
          path: '/sInfo/findLost',
          name: 'findLost',
          component: sFindLost
        },
        {
          path: '/sInfo/suggestion',
          name: 'suggestion',
          component: sSuggestion
        }
      ]
    },
    {
      path: '/tInfo',
      name: 'tInfo',
      component: tInfo,
      children: [
        {
          path: '/tInfo/identity',
          name: 'identity',
          component: tIdentity
        },
        {
          path: '/tInfo/process',
          name: 'process',
          component: tProcess
        },
        {
          path: '/tInfo/history',
          name: 'history',
          component: tHistory
        },
        {
          path: '/tInfo/findLost',
          name: 'findLost',
          component: tFindLost
        },
        {
          path: '/tInfo/suggestion',
          name: 'suggestion',
          component: tSuggestion
        }
      ]
    },
    {
      path: '/tNews',
      name: 'news',
      component: tNews
    },
    {
      path: '/tEdit',
      name: 'edit',
      component: tEdit
    },
    {
      path: '/wInfo',
      name: 'wInfo',
      component: wInfo,
      children: [
        {
          path: '/wInfo/identity',
          name: 'identity',
          component: wIdentity
        },
        {
          path: '/wInfo/process',
          name: 'process',
          component: wProcess
        },
        {
          path: '/wInfo/history',
          name: 'history',
          component: wHistory
        }
      ]
    }
  ]
})
