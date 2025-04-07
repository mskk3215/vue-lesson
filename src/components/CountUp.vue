<script setup>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  nextTick,
} from 'vue'
const count = ref(9)
onBeforeMount(() => {
  console.log('onBeforeMount')
})
onMounted(() => {
  console.log('onMounted')
})
onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})
onUpdated(() => {
  console.log('onUpdated')
})

onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})
onUnmounted(() => {
  console.log('onUnmounted')
})
// Domの更新後に実行される
nextTick(() => {
  count.value++
  console.log('nextTick')
})
</script>
<template>
  <h2 class="red">CountUp</h2>
  <p class="red">{{ count }}</p>
  <button @click="count++">button</button>
</template>
