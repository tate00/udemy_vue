<script setup>
import { ref } from 'vue'

const isShow = ref(true)
</script>
<template>
  <h1>Animation</h1>
  <button @click="isShow = !isShow">switch</button>
  <!-- cssアニメーションライブラリを使う -->
  <Transition
    name="custom-classes"
    enter-active-class="animate__animated animate__bounce"
    leave-active-class="animate__animated animate__shakeX"
  >
    <div v-if="isShow">Hello Fade</div>
  </Transition>
</template>
<style scoped>
.fade-enter-from {
  opacity: 0;
}
.hello {
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
