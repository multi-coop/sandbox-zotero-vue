import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ZoteroView from '../views/ZoteroView.vue'
import CardView from '../views/CardView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: ZoteroView,
    },
    {
        path: '/zotero',
        name : 'zotero',
        component : ZoteroView,
    },
    {
      path: '/card/:id',
      name : 'card',
      component : CardView,
  },
  {
    path: '/card/',
    name : 'cardItem',
    component : CardView,
},

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
