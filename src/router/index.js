import Vue from 'vue'
import Router from 'vue-router'

import Index from '../views/home/index'
import Movie from '../views/home/movie'
import Books from '../views/home/books'
import Notice from '../views/home/notice'
import Group from '../views/home/group'
import Inquire from '../views/home/inquire'
import Reg from '../views/home/reg'
import Login from '../views/home/login'
// import Search from '../views/home/search'

import XiangQing from '../views/home/xiangqing'

import MoveXq from '../views/home/moviexq'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/search',
    //   name: 'search',
    //   component: Search
    // },
    {
      path: '/moviexq',
      name: 'moviexq',
      component: MoveXq
    },
    {
      path: '/xiangqing',
      name: 'xiangqing',
      component: XiangQing
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/movie',
      name: 'movie',
      component: Movie
    },
    {
      path: '/books',
      name: 'books',
      component: Books
    },
    {
      path: '/notice',
      name: 'notice',
      component: Notice
    },
    {
      path: '/group',
      name: 'group',
      component: Group
    },
    {
      path: '/inquire',
      name: 'inquire',
      component: Inquire
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:'/*',
      redirect:'/index'
    }
  ]
})
