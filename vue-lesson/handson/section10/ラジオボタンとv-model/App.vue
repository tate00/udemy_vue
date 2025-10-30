<script setup>
import { ref } from 'vue'

const userInput = ref('')
const message = ref('')
const checked = ref('not checked')
const fruits = ref([])
// 初期値
const gender = ref('male')
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
  <input id="Apple" v-model="fruits" type="checkbox" value="Apple" />
  <label for="Apple">Apple</label>
  <input id="Banana" v-model="fruits" type="checkbox" value="Banana" />
  <label for="Banana">Banana</label>
  <input id="Grape" v-model="fruits" type="checkbox" value="Grape" />
  <label for="Grape">Grape</label>
  <p>{{ fruits }}</p>
  <h2>Radio</h2>
  <input id="male" v-model="gender" type="radio" value="male" />
  <label for="male">male</label>
  <input id="female" v-model="gender" type="radio" value="female" />
  <label for="female">female</label>
  <p>{{ gender }}</p>
</template>
