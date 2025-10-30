<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  emoji: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="card">
    <div>{{ name }}</div>
    <div>{{ emoji }}</div>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  padding: 16px;
  text-align: center;
  font-size: 2rem;
  cursor: pointer;
}
</style>
