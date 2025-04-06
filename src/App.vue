<script setup>
import { ref } from 'vue'
import CountDisplay from './components/CountDisplay.vue'
const count = ref(0)
</script>
<template>
  <CountDisplay :count-props="count" bar="bar" />
  <button @click="count++">+1</button>
</template>
