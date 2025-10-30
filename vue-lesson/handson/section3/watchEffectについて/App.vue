<script setup>
import { ref, watchEffect } from 'vue'
const count = ref(0)
watchEffect(() => {
  console.log('watchEffect')
  setTimeout(() => {
    console.log('after 1 second')
  }, 1000)
  console.log(count.value)
  count.value = 'hello'
})
</script>
<template>
  <p>{{ count }}</p>
  <button @click="count++">+1</button>
</template>
