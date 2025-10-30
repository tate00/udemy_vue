<template>
  <h2>Home</h2>
  <h3>Blog</h3>
  <RouterLink :to="{ name: 'blog', params: { id: 3, version: 'foo' } }">New Release!</RouterLink>
</template>
