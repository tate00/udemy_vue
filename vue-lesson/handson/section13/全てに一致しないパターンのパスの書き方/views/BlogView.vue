<script setup></script>
<template>
  <h2>Blog(id: {{ $route.params.id }})</h2>
  <RouterLink
    :to="{
      name: 'blog',
      params: { id: Number($route.params.id) + 1 }
    }"
    >Next</RouterLink
  >
</template>
