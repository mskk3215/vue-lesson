<script setup>
defineProps({
  countProps: {
    type: [Number, String],
    required: true,
    // default: 1,
  },
})
</script>
<template>
  <p>count: {{ count }}</p>
</template>
