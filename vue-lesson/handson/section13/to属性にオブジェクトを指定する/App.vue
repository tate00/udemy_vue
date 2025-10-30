<script setup></script>
<template>
  <h1>Vue Router</h1>
  <RouterLink :to="'/?lang=ja#title'">Home</RouterLink> |
  <RouterLink :to="{ path: '/about', query: { lang: 'ja' }, hash: '#title' }">About</RouterLink>
  <RouterView />
</template>
