<script setup>
import { ref } from 'vue'
const pageCount = ref(1)
</script>
<template>
  <div>
    <button @click="pageCount = 1">1</button>
    <button @click="pageCount = 2">2</button>
    <button @click="pageCount = 3">3</button>
    <header>
      <slot name="header" :page-count="pageCount" />
    </header>
    <main><slot /></main>
    <footer><slot name="footer" />No content</footer>
  </div>
</template>
<style scoped>
div {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  padding: 1rem;
}
</style>
