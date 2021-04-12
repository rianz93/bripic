import Vue from 'vue'
import VueRouter from 'vue-router'
import userUI from '../views/userUI.vue'


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path:'/',
    name:'userUI',
    component:userUI
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
