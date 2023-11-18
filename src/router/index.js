import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import intro from '@/components/intro'
import work from '@/components/work'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/intro',
      name: 'intro',
      component: intro
    },
    {
      path: '/work',
      name: 'work',
      component: work
    },
  ]
})
