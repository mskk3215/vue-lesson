<template>
  <div>
    <slot />
    <slot>No content</slot>
    <header>
      <slot name="header" />
    </header>
    <main><slot /></main>
    <footer><slot name="footer" />No content</footer>
  </div>
</template>
<style scoped>
div {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  padding: 1rem;
}
</style>
