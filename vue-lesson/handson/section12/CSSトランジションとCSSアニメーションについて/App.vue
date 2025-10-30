<script setup>
import { ref } from 'vue'

const isShow = ref(true)
</script>
<template>
  <h1>Animation</h1>
  <div v-if="isShow" :class="{ 'opacity-80': isShow, 'opacity-20': !isShow, slide: !isShow }">
    Hello
  </div>
  <button @click="isShow = !isShow">Show</button>
</template>
<style scoped>
div {
/* 1秒かけてopacityを変化させる */
  transition: opacity 1s;
}
.slide {
  animation: slide 1s;
}
.opacity-80 {
/* opacity（透明度）を0.8にする */
  opacity: 0.8;
}
.opacity-20 {
  opacity: 0.2;
}
@keyframes slide {
  0% {
  /* X方向に0px移動 */
    transform: translateX(0);
  }
  50% {
  /* X方向に100px移動 */
    transform: translateX(100px);
  }
  100% {
  /* X方向に0px移動 */
    transform: translateX(0);
  }
}
</style>
