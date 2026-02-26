import { createRouter, createWebHistory } from 'vue-router'
import FirstSword from '@/views/FirstSword.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'FirstSword',
      component:FirstSword
    },
  ],
})

export default router
