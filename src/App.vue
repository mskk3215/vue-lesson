<script setup>
import BaseCard from './components/BaseCard.vue'
</script>
<template>
  <BaseCard>
    <h1>Hello</h1>
    <p>How are you?</p></BaseCard
  >
  <BaseCard></BaseCard>
    <p>This is a paragraph</p>
    <template #header><h2>Hello</h2></template>
    <template #header="{ pageCount }">
      <h2 v-if="pageCount === 1">Vue.js</h2>
      <h2 v-if="pageCount === 2">HTML</h2>
      <h2 v-if="pageCount === 3">CSS</h2>
    </template>
    <p>How are you?</p>
    <template #footer></template>
</template>
