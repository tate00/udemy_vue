<script setup>
import { ref, shallowRef } from 'vue'
import CompA from './components/CompA.vue'
import CompB from './components/CompB.vue'
import CompC from './components/CompC.vue'
const currentComp = shallowRef(CompA)
const isShow = ref(false)
</script>
<template>
  <h1>Dynamic Components</h1>
  <button @click="currentComp = CompA">A</button>
  <button @click="currentComp = CompB">B</button>
  <button @click="currentComp = CompC">C</button>
  <KeepAlive>
    <component :is="currentComp" />
  </KeepAlive>
  <button @click="isShow = true">Open Modal</button>
  <!-- to属性で指定したセレクタの要素直下にコンテンツを移動させる -->
  <Teleport to="body">
    <dialog v-if="isShow" open>
      <p>This is a Modal!</p>
      <button @click="isShow = false">Close</button>
    </dialog>
  </Teleport>
  <Teleport to="body"><p>A</p></Teleport>
  <Teleport to="body"><p>B</p></Teleport>
</template>
