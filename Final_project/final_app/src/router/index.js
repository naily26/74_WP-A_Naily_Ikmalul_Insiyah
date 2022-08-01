import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/visimisi',
    name: 'visimisi',
    component: () => import('../views/VisiMisi.vue')
  },
  {
    path: '/productnservices',
    name: 'productnservices',
    component: () => import('../views/OurServices.vue')
  },
  {
    path: '/ourwork',
    name: 'ourwork',
    component: () => import('../views/OurWork.vue')
  },
  {
    path: '/testimoni',
    name: 'testimoni',
    component: () => import('../views/OurTestimoni.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/OurContact.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
