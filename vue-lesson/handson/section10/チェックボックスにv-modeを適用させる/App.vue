<script setup>
import { ref } from 'vue'

const userInput = ref('')
const message = ref('')
const checked = ref('not checked')

const fruits = ref([])
</script>
<template>
  <h1>v-model</h1>
  <h2>Text</h2>
  <input v-model="userInput" type="text" />
  <p>{{ userInput }}</p>
  <h2>Textarea</h2>
  <textarea v-model="message"></textarea>
  <p style="white-space: pre">{{ message }}</p>
  <h2>Checkbox</h2>
  <input
    id="checkbox"
    v-model="checked"
    type="checkbox"
    true-value="checked"
    false-value="not checked"
  />
  <label for="checkbox">{{ checked }}</label>
  <p>Fruits</p>
  <!-- valueを指定することで、値の配列として扱うことができる -->
  <input id="Apple" v-model="fruits" type="checkbox" value="Apple" />
  <label for="Apple">Apple</label>
  <input id="Banana" v-model="fruits" type="checkbox" value="Banana" />
  <label for="Banana">Banana</label>
  <input id="Grape" v-model="fruits" type="checkbox" value="Grape" />
  <label for="Grape">Grape</label>
  <p>{{ fruits }}</p>
</template>
