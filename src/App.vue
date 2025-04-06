<script setup>
import CountUp from './components/CountUp.vue'
import BaseButton from './components/BaseButton.vue'
import { ref } from 'vue'
import CountDisplay from './components/CountDisplay.vue'
const count = ref(0)
</script>
<template>
  <h1 class="red">App</h1>
  <BaseIcon />
  <CountUp />
  <BaseButton id="base-button" class="border" @click="console.log('App.vue')" />
  <CountDisplay :count-props="count" bar="bar" />
  <button @click="count++">+1</button>
</template>
<!-- scopedをつけてcomponent内だけで使用するのが一般的 -->
<style scoped>
.red {
  color: red;
}
</style>
