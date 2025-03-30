<script setup>
import { ref } from 'vue'
const ok = ref(true)
const maybeOk = ref(true)
</script>
<template>
  <button @click="ok = !ok">toggle</button>
  <!-- v-if,else-if,elseはまとめて書く -->
  <p v-if="ok">OK!</p>
  <p v-else-if="maybeOk">maybe OK!</p>
  <p v-else>not OK!...</p>
</template>
