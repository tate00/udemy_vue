<script setup>
import { ref } from 'vue'
const ok = ref(true)
const maybeOk = ref(false)
</script>
<template>
  <button @click="ok = !ok">toggle</button>
  <p v-if="ok">OK!</p>
  <p v-else-if="maybeOk">maybe OK!</p>
  <p v-else>not OK...</p>
</template>
