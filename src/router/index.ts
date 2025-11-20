import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import CapitalAcrossThesis from '../views/CapitalAcrossThesis.vue'
// Use the correct type for the routes array
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'CapitalAcrossThesis',
    component: CapitalAcrossThesis
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router