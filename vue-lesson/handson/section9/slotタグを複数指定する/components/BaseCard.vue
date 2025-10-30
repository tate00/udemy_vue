<script setup></script>
<template>
  <div>
    <header>
      <slot name="header" />
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <slot name="footer">
        <p>Instructor: Anonymous</p>
      </slot>
    </footer>
  </div>
</template>
<style scoped>
div {
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  padding: 16px;
}
</style>
