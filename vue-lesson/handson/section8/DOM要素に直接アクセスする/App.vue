<script setup>
import { onMounted, useTemplateRef } from 'vue'

// Template Refを使ってDOM要素にアクセスする
const userInput = useTemplateRef('user-input')
console.log(userInput.value)
onMounted(() => {
  userInput.value.focus()
})
</script>
<template>
  <input ref="user-input" type="text" />
</template>
