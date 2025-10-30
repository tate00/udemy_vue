import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blog/:id',
      name: 'blog',
      component: BlogView
    }
  ]
})
router.beforeEach(async (to, from) => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  console.log(to, from)
  console.log('beforeEach')
  if (to.name === 'blog') return { name: 'home' }
})
export default router
