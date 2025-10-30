<script setup>
import { ref } from 'vue'

const fruits = ref(['Apple', 'Banana', 'Grape'])
const newFruit = ref('')
</script>
<template>
  <h1>Animation</h1>
  <input v-model="newFruit" type="text" />
  <button @click="fruits.unshift(newFruit)">Add</button>
  <TransitionGroup name="fade" tag="div">
  <!-- 複数の要素を入れる場合はTransitionGroupを使う -->
    <div v-for="(fruit, index) in fruits" :key="fruit" @click="fruits.splice(index, 1)">
      {{ fruit }}
    </div>
  </TransitionGroup>
</template>
<style scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 1s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
