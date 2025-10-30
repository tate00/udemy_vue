<script setup>
import { ref } from 'vue'

const isShow = ref(true)
function beforeEnter(el) {
  console.log('beforeEnter', el)
  el.style.transform = 'translateX(30px)'
}
function enter(el, done) {
  console.log('enter', el)
  let translateXValue = 30
   // アニメーション処理
   // 20msごとにtranslateXValueを1ずつ減らしていき、0になったらdoneを呼ぶ
  const intervalId = setInterval(() => {
    translateXValue -= 1
    el.style.transform = `translateX(${translateXValue}px)`
    if (translateXValue === 0) {
      clearInterval(intervalId)
      done()
    }
  }, 20)
}
function afterEnter(el) {
  console.log('afterEnter', el)
}
function beforeLeave(el) {
  console.log('beforeLeave', el)
}
function leave(el, done) {
  console.log('leave', el)
  let translateXValue = 0
  const intervalId = setInterval(() => {
    translateXValue += 1
    el.style.transform = `translateX(${translateXValue}px)`
    if (translateXValue === 30) {
      clearInterval(intervalId)
      done()
    }
  }, 20)
}
function afterLeave(el) {
  console.log('afterLeave', el)
}
</script>
<template>
  <h1>Animation</h1>
  <button @click="isShow = !isShow">switch</button>
  <Transition
    :css="false"
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
