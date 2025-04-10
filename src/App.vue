<script setup>
import { shallowRef } from 'vue'
import CompA from './components/CompA.vue'
import CompB from './components/CompB.vue'
import CompC from './components/CompC.vue'
const currentComponent = shallowRef('CompA')
</script>
<template>
  <h1>Dynamic Components</h1>
  <br />
  <button @click="currentComponent = CompA">A</button>
  <button @click="currentComponent = CompB">B</button>
  <button @click="currentComponent = CompC">C</button>
  <br />
  <component :is="currentComponent" />
</template>
