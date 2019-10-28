import Vue from 'vue'
import Router from 'vue-router'

const index=()=>import('../pages/index.vue')
const newDetail=()=>import('../pages/new-detail.vue')
const comment=()=>import('../pages/comment.vue')
const sc=()=>import('../pages/sc.vue')
Vue.use(Router)

export default new Router({
  routes: [
      {
        path:'/index',
        component:index
      },
      {
        path:'/newDetail/:id',
        component:newDetail
      },
      {
        path:'/comment',
        component:comment
      },
      {
        path:'/sc',
        component:sc
      },
      {
        path:'*',
        redirect:'index'
      }
  ]
})
