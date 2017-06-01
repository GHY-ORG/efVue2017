import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/home'
import Board from '@/page/board/board'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/Home',
    name: 'Home',
    component: Home
  }, {
    path: '/',
    redirect: '/Home'
  }, {
    path: '/Board',
    name: 'Board',
    component: Board
  }]
})
