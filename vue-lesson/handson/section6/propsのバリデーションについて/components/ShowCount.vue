<script setup>
defineProps({
  foo: {
    type: Number,
    default: 100
  }
})
</script>
<template>
  <p>count: {{ foo }}</p>
</template>
