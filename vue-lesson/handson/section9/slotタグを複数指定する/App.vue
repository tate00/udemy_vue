<script setup>
import BaseCard from './components/BaseCard.vue'
</script>
<template>
  <h1>Slots</h1>
  <BaseCard>
    <!-- vを省略可能 #とslotが対応している -->
    <template #header>
      <h2>Vue.js Course</h2>
    </template>
    <p>This is a Vue.js Course. You can learn Vue.js.</p>
    <template #footer>
      <p>Instructor: Yoshipi</p>
    </template>
  </BaseCard>
</template>
