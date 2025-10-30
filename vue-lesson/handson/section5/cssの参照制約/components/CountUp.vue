<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>
<template>
  <h2 v-bind="$attrs">CountUp</h2>
  <BaseIcon />
  <p class="red">count: {{ count }}</p>
  <button @click="count++">+1</button>
</template>
<style scoped>
.red {
  color: red;
}
</style>
