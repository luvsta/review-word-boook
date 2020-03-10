import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',  //去掉url中的#
  routes: [
    {
      path: '/',
      name: '主页',
      component: require('@/components/HelloWorld').default
    },
    {
      path: '/inputword',
      name: '单词录入页面',
      component: require('@/components/InputWordPage/InputWordPage').default
    },
    {
      path: '/reviewword',
      name: '单词复习页面',
      component: require('@/components/ReviewWordPage/ReviewWordPage').default
    },
    {
      path: '/notebook',
      name: '单词复习页面',
      component: require('@/components/NoteBookPage/NoteBookPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
