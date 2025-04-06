<script setup>
import { ref } from 'vue'
import CountDisplay from './components/CountDisplay.vue'
import ResetButton from './components/ResetButton.vue'
const count = ref(0)
function onReset(value) {
  count.value = value
}
</script>
<template>
  <CountDisplay :count-props="count" bar="bar" />
  <button @click="count++">+1</button>
  <ResetButton @reset="count = 0" />
  <ResetButton @reset-count="onReset" />
</template>
