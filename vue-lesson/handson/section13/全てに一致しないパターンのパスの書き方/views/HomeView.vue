<template>
  <h2>Home</h2>
  <h3>Blog</h3>
  <RouterLink :to="{ name: 'blog', params: { id: '' } }">New Release!</RouterLink>
</template>
