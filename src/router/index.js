import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import Regist from '@/views/regist/Regist.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'app',
      component: Regist,
      children: [
        {
          path: '/Regist',
          name: 'Regist',
          component: Regist
        }
      ]
    },
    {
      path: '/index',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/Index',
          name: 'Index',
          component: () =>
            import(/* webpackChunkName: "about" */ '@/views/Index.vue')
        },
        {
          path: '/Users',
          name: 'Users',
          component: () =>
            import(/* webpackChunkName: "about" */ '@/views/org/User.vue')
        }
      ]
    }
  ]
})
