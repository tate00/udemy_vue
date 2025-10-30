<script setup>
import { ref } from 'vue'
const ok = ref(true)
</script>
<template>
  <button @click="ok = !ok">toggle</button>
  <template v-if="ok">
    <p>OK!</p>
    <p>Hello</p>
    <p>Hi</p>
  </template>
</template>
