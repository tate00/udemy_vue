<script setup>
defineProps({
  totalScore: {
    type: Number,
    required: true,
    validator(value) {
      return value === 0 || value === 1
    }
  }
})
</script>
<template>
  <p>count: {{ totalScore }}</p>
</template>
