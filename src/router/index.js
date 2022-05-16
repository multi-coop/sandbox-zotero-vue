import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ZoteroView from '../views/ZoteroView.vue'
import OfficialAPI from '../views/OfficialAPI.vue'
import CardView from '../views/CardView.vue'
import Apicard from '../components/apiCardItem.vue'
import ApiCardView from '../views/ApiCardView.vue'

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
        path: '/officialapi',
        name : 'OfficialAPI',
        component : OfficialAPI,
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
  {
        path: '/apicard/',
        name : 'apicard',
        component : Apicard,
  },
  {
        path: '/apicard/:id',
        name : 'apicardItem',
        component : ApiCardView,
  },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
