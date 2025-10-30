<script setup>
import { ref } from 'vue'

const userInput = ref('')
const message = ref('')
</script>
<template>
  <h1>v-model</h1>
  <h2>Text</h2>
  <input v-model="userInput" type="text" />
  <p>{{ userInput }}</p>
  <h2>Textarea</h2>
  <textarea v-model="message"></textarea>
  <!-- 改行をそのまま表示するためにstyle属性でwhite-space: preを指定 -->
  <p style="white-space: pre">{{ message }}</p>
</template>
