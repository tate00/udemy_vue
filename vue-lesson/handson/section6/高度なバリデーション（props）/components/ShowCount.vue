<script setup>
defineProps({
  foo: {
    type: Number,
    required: true,
    validator(value) {
      return value === 0 || value === 1
    }
  }
})
</script>
<template>
  <p>count: {{ foo }}</p>
</template>
