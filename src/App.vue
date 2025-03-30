<script setup>
import CountUp from './components/CountUp.vue'
import BaseButton from './components/BaseButton.vue'
</script>
<template>
  <h1 class="red">App</h1>
  <BaseIcon />
  <CountUp />
  <BaseButton id="base-button" class="border" @click="console.log('App.vue')" />
</template>
<!-- scopedをつけてcomponent内だけで使用するのが一般的 -->
<style scoped>
.red {
  color: red;
}
</style>
