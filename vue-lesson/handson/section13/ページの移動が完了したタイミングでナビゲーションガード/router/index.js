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
      component: BlogView,
      beforeEnter() {
        console.log('beforeEnter')
      }
    }
  ]
})
router.beforeEach(() => {
  console.log('beforeEach')
})
router.beforeResolve(() => {
  console.log('beforeResolve')
  // ナビゲーションが確定する直前に実行される
})
router.afterEach(() => {
  console.log('afterEach')
  // ページの移動が完了したタイミングで実行される
  // 実質的にはナビゲーションガードではない
})
export default router
