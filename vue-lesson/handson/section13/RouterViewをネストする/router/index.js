import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import PostsView from '../views/PostsView.vue'
import LikesView from '../views/LikesView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:id',
      component: ProfileView,
      children: [
        {
        // id直下のパスはpostsを表示
          path: '',
          name: 'posts',
          component: PostsView
        },
        {
        // id/likesのパスはlikesを表示
          path: 'likes',
          name: 'likes',
          component: LikesView
        }
      ]
    }
  ]
})
export default router
