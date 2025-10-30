<script setup></script>
<template>
  <h1>Vue Router</h1>
  <RouterLink :to="{ name: 'home' }">Home</RouterLink> |
  <RouterLink :to="{ name: 'blog', params: { id: 3 }, hash: '#blog' }">Blog(id: 3)</RouterLink>
  <RouterView v-slot="{ Component, route }">
    <!-- 使うTransitionのnameをroute.meta.transitionで切り替える -->
    <Transition :name="route.meta.transition" mode="out-in">
      <component :is="Component" />
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
  transition: opacity 0.5s;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100px);
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}
</style>
