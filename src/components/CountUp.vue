<script setup>
import { ref } from 'vue'
const count = ref(9)
</script>
<template>
  <h2 class="red">CountUp</h2>
  <p class="red">{{ count }}</p>
  <button @click="count++">button</button>
</template>
