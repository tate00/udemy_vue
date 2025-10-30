<script setup></script>
<template>
  <h1>Vue Router</h1>
  <RouterLink :to="{ name: 'home' }">Home</RouterLink> |
  <RouterLink :to="{ name: 'blog', params: { id: 3 } }">Blog(id: 3)</RouterLink>
  <RouterView v-slot="{ Component, route }">
  <!-- mode="out-in" を指定すると、現在のコンポーネントが完全に消えた後に次のコンポーネントが表示される -->
    <Transition name="fade" mode="out-in">
    <!-- 動的コンポーネントを指定すると、自然なアニメーションが可能になる -->
      <component :is="Component" :key="route.path" />
    </Transition>
  </RouterView>
</template>
<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
</style>
