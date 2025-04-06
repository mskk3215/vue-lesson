<script setup>
defineProps({
  countProps: {
    type: Number,
    required: true,
  },
})
defineEmits(['resetCount'])
</script>
<template>
  <button @click="$emit('resetCount', 100)">Reset</button>
</template>
