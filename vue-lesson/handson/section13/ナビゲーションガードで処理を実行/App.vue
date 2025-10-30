<script setup></script>
<template>
  <h1>Vue Router</h1>
  <RouterLink :to="{ name: 'home' }">Home</RouterLink> |
  <RouterLink :to="{ name: 'blog', params: { id: 3 }, hash: '#blog' }">Blog(id: 3)</RouterLink>
  <RouterView />
</template>
