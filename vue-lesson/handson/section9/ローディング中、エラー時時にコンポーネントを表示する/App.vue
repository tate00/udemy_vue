<script setup>
import { defineAsyncComponent, shallowRef } from 'vue'
import CompA from './components/CompA.vue'
// import CompB from './components/CompB.vue'
import BaseLoader from './components/BaseLoader.vue'
import ErrorMessage from './components/ErrorMessage.vue'

const CompB = defineAsyncComponent({
  loader: () => import('./components/CompB.vue'),
  // ローディング中のコンポーネントを指定
  loadingComponent: BaseLoader,
  delay: 200,
  // エラー時のコンポーネントを指定
  errorComponent: ErrorMessage,
  timeout: 2000
})
import CompC from './components/CompC.vue'
const currentComp = shallowRef(CompA)
</script>
<template>
  <h1>Dynamic Components</h1>
  <button @click="currentComp = CompA">A</button>
  <button @click="currentComp = CompB">B</button>
  <button @click="currentComp = CompC">C</button>
  <component :is="currentComp" />
</template>
