<script setup>
import { shallowRef } from 'vue'
import CompA from './components/CompA.vue'
import CompB from './components/CompB.vue'
import CompC from './components/CompC.vue'
const currentComp = shallowRef(CompA)
console.log(CompA)
</script>
<template>
  <h1>Dynamic Components</h1>
  <button @click="currentComp = CompA">A</button>
  <button @click="currentComp = CompB">B</button>
  <button @click="currentComp = CompC">C</button>
  <component :is="currentComp" />
</template>
