<template>
  <div>
    <slot />
    <slot>No content</slot>
  </div>
</template>
<style scoped>
div {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  padding: 1rem;
}
</style>
