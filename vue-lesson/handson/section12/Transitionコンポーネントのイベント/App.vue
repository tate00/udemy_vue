<script setup>
import { ref } from 'vue'

const isShow = ref(true)
function beforeEnter(el) {
  console.log('beforeEnter', el)
}
function enter(el) {
  console.log('enter', el)
}
function afterEnter(el) {
  console.log('afterEnter', el)
}
function beforeLeave(el) {
  console.log('beforeLeave', el)
}
function leave(el) {
  console.log('leave', el)
}
function afterLeave(el) {
  console.log('afterLeave', el)
}
</script>
<template>
  <h1>Animation</h1>
  <button @click="isShow = !isShow">switch</button>
  <!-- Transitionコンポーネントのイベントをキャッチする -->
  <Transition
    name="fade"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <div v-if="isShow">Hello</div>
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
</style>
