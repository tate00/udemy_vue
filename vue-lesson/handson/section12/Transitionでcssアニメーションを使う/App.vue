<script setup>
import { ref } from 'vue'

const isShow = ref(true)
</script>
<template>
  <h1>Animation</h1>
  <button @click="isShow = !isShow">switch</button>
  <Transition name="fade">
    <div v-if="isShow">Hello Fade</div>
  </Transition>
  <Transition name="slide">
    <div v-if="isShow">Hello Slide</div>
  </Transition>
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
.slide-enter-active {
/* 表示時のアニメーション */
  animation: slide 1s;
}
.slide-leave-active {
/* 逆再生 */
  animation: slide 1s reverse;
}
@keyframes slide {
  0% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
