<script setup>
import { ref } from 'vue'
const ok = ref(true)
</script>
<template>
  <button @click="ok = !ok">toggle</button>
  <!-- 高頻度で切り替えるものはv-showを使用する -->
  <p v-show="ok">OK!</p>
</template>
