import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from "@/pages/main/MainPage";

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router