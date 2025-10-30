<script setup>
import { ref } from 'vue'
import CompA from './components/CompA.vue'
import CompB from './components/CompB.vue'
import CompC from './components/CompC.vue'
const currentComp = ref(CompA)
</script>
<template>
  <h1>Dynamic Components</h1>
  <button @click="currentComp = CompA">A</button>
  <button @click="currentComp = CompB">B</button>
  <button @click="currentComp = CompC">C</button>
  <!-- is属性で動的にコンポーネントを切り替える -->
  <component :is="currentComp" />
</template>
