<script setup>
import { ref } from 'vue'
import CustomInput from './components/CustomInput.vue'
const userInput = ref('hello')
const titleInput = ref('title')
</script>
<template>
  <h1>v-model</h1>
<!-- uperケースを使うことで、入力値が自動的に大文字になる.子コンポーネントと同期される。 -->
  <CustomInput v-model.uppercase="userInput" v-model:title-name="titleInput" />
  <p>userInput: {{ userInput }}</p>
  <p>titleInput: {{ titleInput }}</p>
</template>
