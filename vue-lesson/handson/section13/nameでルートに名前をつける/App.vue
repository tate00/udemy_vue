<script setup></script>
<template>
  <h1>Vue Router</h1>
  <!-- ルートに名前をつけてリンクを作成 -->
  <RouterLink :to="{ name: 'home' }">Home</RouterLink> |
  <RouterLink :to="{ name: 'about' }">About</RouterLink>
  <RouterView />
</template>
