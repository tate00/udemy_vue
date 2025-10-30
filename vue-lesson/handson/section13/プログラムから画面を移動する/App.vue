<script setup></script>
<template>
  <h1>Vue Router</h1>
  <RouterLink :to="'/?lang=ja#title'" replace>Home</RouterLink> |
  <!-- コードから画面遷移するボタン -->
  <!-- また、replace,goなどもある -->
  <button @click="$router.push({ path: '/about' })">About</button>
  <RouterView />
</template>
