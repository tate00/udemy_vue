<script setup>
import { ref } from 'vue'
const fruits = ref(['Apple', 'Banana', 'Grape'])
</script>
<template>
  <li v-for="fruit in fruits">{{ fruit }}</li>
</template>
