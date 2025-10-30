<script setup>
import { ref } from 'vue'

const isShow = ref(true)
</script>
<template>
  <h1>Animation</h1>
  <button @click="isShow = !isShow">switch</button>
  <Transition>
  <!-- v-ifで要素の表示・非表示を切り替える -->
  <!-- 一つの要素だけを包む必要がある -->
    <div v-if="isShow">Hello</div>
  </Transition>
</template>
<style scoped>
.v-enter-from {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 1s;
}
.v-enter-to {
  opacity: 1;
}
.v-leave-from {
  opacity: 1;
}
.v-leave-active {
  transition: opacity 1s;
}
.v-leave-to {
  opacity: 0;
}
</style>
