<script setup>
import { ref } from 'vue'
const fruits = ref([
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Grape' },
  { id: 4, name: 'Orange' },
])
</script>
<template>
  <!-- v-forの時はkeyが必要。v-ifは自動で付与してくれる。 -->
  <!-- indexとループのcontentは一致しないのでkeyにindexを使用しない -->
  <!-- v-forでは分割代入ができる -->
  <li v-for="({ id, name }, index) in fruits" :key="id">{{ name }}({{ index }})</li>
</template>
