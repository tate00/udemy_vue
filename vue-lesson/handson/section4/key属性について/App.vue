<script setup>
import { ref } from 'vue'
const fruits = ref([
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Apple' },
  { id: 3, name: 'Banana' },
  { id: 4, name: 'Grape' }
])
</script>
<template>
  <button @click="fruits.shift()">button</button>
  <li v-for="fruit in fruits" :key="fruit.id"><input type="text" />{{ fruit.name }}</li>
</template>
