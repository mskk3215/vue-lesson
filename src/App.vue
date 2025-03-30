<script setup>
import { ref } from 'vue'
const user = ref({
  name: 'Yoshipi',
  age: 25,
  gender: 'man',
})
</script>
<template>
  <p v-for="(value, key, index) in user" :key="value">{{ key }}:{{ value }}({{ index }})</p>
  <p v-for="n in 10" :key="n">{{ n }}</p>
  <p v-for="n of 10" :key="n">{{ n }}</p>
</template>
